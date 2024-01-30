import React, { useState } from "react";
import "./todoApp.style.css";
import TodoItem from "../../components/todoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onInputChange = (e) => {
    if (e.target.value) {
      setInput(e.target.value);
    }
  };

  const onBtnClick = () => {
    if (input) {
      setTodoList([
        ...todoList,
        { text: input, todoId: uuidv4(), isCompleted: false },
      ]);
      setInput("");
    }
  };

  const onDeleteHandler = (id) => {
    setTodoList(todoList.filter((el) => el.todoId !== id));
    console.log("clicked", id);
  };

  const onCheckboxHandler = (id) => {
    const newTodoList = todoList.map((el) =>
      el.todoId === id ? { ...el, isCompleted: !el.isCompleted } : el
    );
    setTodoList(newTodoList);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="add-todo">
        <input
          id="add-input"
          type="text"
          value={input}
          onChange={onInputChange}
          placeholder={"enter your plans..."}
        />
        <button id="add-btn" onClick={onBtnClick}>
          Add
        </button>
      </div>
      <div className="todoItem-box">
        {todoList.length
          ? todoList.map((el, index) => (
              <TodoItem
                onCheckboxHandler={onCheckboxHandler}
                isCompleted={el.isCompleted}
                key={index}
                text={el.text}
                todoId={el.todoId}
                deleteHandler={onDeleteHandler}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default TodoApp;
