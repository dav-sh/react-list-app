import React from "react";

function TaskCard({ task, deleteTask }) {
  const actionButton = () => {
    // console.log(task.id)
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
