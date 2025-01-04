import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task, deleteTask }) {


  const context = useContext(TaskContext)


  const actionButton = () => {
   console.log(context)
    deleteTask(task)
  }

  return (
    <>
      <h1>{task.name}</h1>
      <p>{task.desc}</p>
      <button onClick={actionButton}>Eliminar tarea {task.id}</button>
    </>
  );
}

export default TaskCard;
