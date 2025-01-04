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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} method="post" className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        type="text"
        placeholder="Ingresa el nombre de la tarea"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        value={taskName}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Ingresa la descripcion"
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
        value={taskDescription}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button className="bg-indigo-500  px-3 py-1 text-white">Agregar</button>
    </form>
    </div>
  );
}

export default TaskForm;
