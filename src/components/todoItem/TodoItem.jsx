import React from "react";
import "./todoItem.style.css";

const TodoItem = ({
  onCheckboxHandler,
  isCompleted,
  todoId,
  text,
  deleteHandler,
}) => {
  return (
    <div className="todoItem-miniBoxes">
      <input
        id="checkbox"
        value=""
        type="checkbox"
        checked={isCompleted}
        onChange={() => onCheckboxHandler(todoId)}
      />
      <p
        id="todo-text"
        style={isCompleted ? { textDecoration: "line-through" } : null}
      >
        {text}
      </p>
      <button id="x-btn" onClick={() => deleteHandler(todoId)}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
