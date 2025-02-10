import React, { useState } from "react";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TodoList todos={todos} onDelete={deleteTask} />
    </div>
  );
}

export default App;
