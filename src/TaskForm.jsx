import { useState } from "react";
import React from "react";

function TaskForm(props) {
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      name: tasks,
    };
    //console.log(props)
    props.createTask(newTask)
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      onChange={(e) => {
        //console.log(e.target.value);
        setTasks(e.target.value);
      }}
    >
      <input type="text" placeholder="Ingresa tu tarea" />
      <button type="button">Agregar</button>
    </form>
  );
}

export default TaskForm;
