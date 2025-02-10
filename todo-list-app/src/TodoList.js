import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} task={todo} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
