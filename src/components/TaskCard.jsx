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
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.name}</h1>
      <p className="text-gray-500 text-sm">{task.desc}</p>
      <button
        onClick={actionButton}
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover: bg-red-400"
      >
        Eliminar tarea {task.id}
      </button>
    </div>
  );
}

export default TaskCard;
