import { useState } from "react";
import React from "react";

function TaskForm() {
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tasks + "Hola");
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      onChange={(e) => {
        console.log(e.target.value);
        setTasks(e.target.value);
      }}
    >
      <input type="text" placeholder="Ingresa tu tarea" />
      <button type="button">Agregar</button>
    </form>
  );
}

export default TaskForm;
