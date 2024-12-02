
import React, { useState } from "react";
import { FaTrash, FaCheckCircle, FaCircle } from "react-icons/fa"; 

const TodoList = () => {
  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ]);
      setTask(""); 
    }
  };

  
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Tareas</h2>

    
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe una tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={addTask}>
          Agregar
        </button>
      </div>

      
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success" : ""
            }`}
          >
            
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className={`me-2 ${task.completed ? "text-decoration-line-through" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>

            
            <div>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? <FaCheckCircle /> : <FaCircle />}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
