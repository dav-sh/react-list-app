
function TaskList(props) {
  

  if (props.tasks === 0) {
    return <h1>No hay tareas</h1>;
  }
  //console.log(props.tasks)
  return (
    <>
      {props.tasks.map((t) => (
        <div key={t.id}>
          <h1>tarea</h1>
          <button>{t.name}</button>
          <p>{t.desc}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
