import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "../context";
import { getStringDate } from "../utill/date";
import { v4 as uuidv4 } from 'uuid';
import styles from "./TodoModal.module.css";

function TodoModal() {
  const { todos, setTodos, openModal, setOpenModal } = useGlobalContext();
  const [todoForm, setTodoForm] = useState({
    todoId: "",
    todoTitle: "",
    todoDescription: "",
    todoDone: false,
    todoPriority: "1",
    todoCreateDate: "",
    todoDueDate: "",
  });
  const {
    todoId,
    todoTitle,
    todoDescription,
    todoDone,
    todoPriority,
    todoCreateDate,
    todoDueDate,
  } = todoForm;

  

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const handleAddNewTodo = () => {
    setOpenModal(!openModal);
  };

  const handleTodoChange = (e) => {
    // console.log("name", e.target.name);

    // console.log("value", e.target.value);
    setTodoForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateTodo = () => {
    const todoCreateDate = new Date();
    console.log(todoCreateDate)
    const todoId = uuidv4();
    console.log(todoId)

    setTodoForm((prevState) => ({
      ...prevState, todoCreateDate, todoId

    }));

  }

  const createNewTodo = () => {
    console.log("gg", todoForm)

    setTodos([todoForm, ...todos])
  }

  useEffect(()=>{
    if(todoCreateDate && todoId){
      createNewTodo()
    }

  }, [todoCreateDate, todoId])

  const closeModal = () => {
    setOpenModal(false);
  }

  return (

        <div className={styles.todoModalOverlay}>
        <div className={styles.todoModalContainer}>
          <div className={styles.todoModalHeader}>
            <div className={styles.todoModalHeaderTitle}>New Task</div>
            <button className={styles.todoModalCloseButton} onClick={closeModal}>X</button>
          </div>
          <div className={styles.todoModalInput}>
            <input
              className={styles.todoModalInputTitle}
              name="todoTitle"
              placeholder="title"
              value={todoTitle}
              onChange={handleTodoChange}
            />
            <input
              className={styles.todoModalInputDescription}
              placeholder="Description"
              name="todoDescription"
              value={todoDescription}
              onChange={handleTodoChange}
            />
          </div>
          <div className={styles.todoModalSettings}>
            <div className={styles.todoModalSettingIcon}>icon</div>
            <div className={styles.todoModalSettingText}>priority</div>
            <select className={styles.todoModalSettingOption} name="todoPriority" value={todoPriority} onChange={handleTodoChange}>
              <option value="1">priority 1</option>
              <option value="2">priority 2</option>
              <option value="3">priority 3</option>
              <option value="4">priority 4</option>
            </select>
          </div>
          <div className={styles.todoModalDueDate}>
            <input
              type="date"
              value={todoDueDate}
              name="todoDueDate"
              onChange={handleTodoChange}
            />
          </div>
          <button className={styles.todoModalAddTodo} onClick={() => handleCreateTodo()}>add</button>
        </div>
        </div>

  );
}

export default TodoModal;
