import React from "react";

function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
