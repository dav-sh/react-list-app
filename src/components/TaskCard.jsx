import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const actionButton = () => {
    console.log("Hola");
    deleteTask(task);
  };

  return (
    <div className="bg-gray-800 text-white">
      <h1>{task.name}</h1>
      <p>{task.desc}</p>
      <button onClick={actionButton}>Eliminar tarea {task.id}</button>
    </div>
  );
}

export default TaskCard;
