import React from 'react'

function TaskCard({task}) {
  return (
    <>
        <h1>{task.name}</h1>
        <p>{task.desc}</p>
        <button>Boton {task.id}</button>
    </>
  )
}

export default TaskCard