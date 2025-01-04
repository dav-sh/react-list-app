import { useContext, useState } from "react";
import React from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const {createTask} = useContext(TaskContext)  //Import function from TaskContext

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      name: taskName,
      desc: taskDescription,
    });
    setTaskName('')
    setTaskDescription('')
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <input
        type="text"
        placeholder="Ingresa el nombre de la tarea"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        value={taskName}
        autoFocus
      />
      <textarea
        placeholder="Ingresa la descripcion"
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
        value={taskDescription}
      />
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
