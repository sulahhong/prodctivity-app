import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Todo.module.css";
import { useGlobalContext } from "../context";
import { getStringDate } from "../utill/date";
import {v4 as uuidv4} from 'uuid';

function Todo() {
  const { todos, setTodos } = useGlobalContext();
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

  const [createTodo, setCreateTodo] = useState(false);

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const handleAddNewTodo = () => {
    setCreateTodo(!createTodo);
  };

  const handleTodoChange = (e) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    setTodoForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateTodo = () => {
    const todoCreateDate= new Date();
const todoId= uuidv4();

    setTodoForm((prevState) => ({
        ...prevState, todoCreateDate, todoId
        
    }));
    
    createNewTodo()
  }

  const createNewTodo=()=>{
console.log("gg", todoForm)
    setTodos([todoForm, ...todos])
  }

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoBody}>
        <div className={styles.todoBodyTitle}>
          <button onClick={() => handleAddNewTodo()}>ADD</button>
        </div>
        <div className={styles.todoBodyContent}>
          <div className={styles.todoBodyInput}>
            <input
              className={styles.todoBodyInputTitle}
              name="todoTitle"
              placeholder="title"
              value={todoTitle}
              onChange={handleTodoChange}
            />
            <input
              className={styles.todoBodyInputDescription}
              placeholder="Description"
              name="todoDescription"
              value={todoDescription}
              onChange={handleTodoChange}
            />
          </div>
          <div className={styles.todoBodySettings}>
            <div className={styles.todoBodySettingIcon}>icon</div>
            <div className={styles.todoBodySettingText}>priority</div>
            <select className={styles.todoBodySettingOption} name="todoPriority" value={todoPriority} onChange={handleTodoChange}>
                <option value="1">priority 1</option>
                <option value="2">priority 2</option>
                <option value="3">priority 3</option>
                <option value="4">priority 4</option>
            </select>
          </div>
          <div className={styles.todoBodyDueDate}>
            <input
              type="date"
              value={todoDueDate}
              name="todoDueDate"
              onChange={handleTodoChange}
            />
          </div>
          <button className={styles.todoBodyAddTodo} onClick={() => handleCreateTodo()}>add</button>
        </div>
        <div className={styles.todoBodyFooter}>3</div>
      </div>
    </div>
  );
}

export default Todo;
