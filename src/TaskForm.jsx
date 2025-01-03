import { useState } from "react";
import React from "react";

function TaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTask({
      name: taskName,
      desc: taskDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <input
        type="text"
        placeholder="Ingresa el nombre de la tarea"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <textarea
        placeholder="Ingresa la descripcion"
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
      />
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
