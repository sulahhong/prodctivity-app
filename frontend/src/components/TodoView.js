import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./TodoView.module.css";
import { useGlobalContext } from "../context";

function TodoView() {

    const { todos, setTodos } = useGlobalContext();

    const handleEditTodo = (id) => {
        console.log("id",id)
    }

  return (
    <div className={styles.todoViewContainer}>
      {todos.map((item) => (
        <div className={styles.todoViewCard}>
            <div className={styles.todoCardTitle}>{item.todoTitle}</div>
            <div className={styles.todoCardDescription}>{item.todoDescription}</div>
            <div className={styles.todoCardPriority}>{item.todoPriority}</div>
            <div className={styles.todoCardDueDate}>{item.todoDueDate}</div>
            <button className={styles.todoCardEditButton} onClick={() => handleEditTodo(item.todoId)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default TodoView
