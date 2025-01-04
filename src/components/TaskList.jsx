import TaskCard from "./TaskCard";

function TaskList(props) {
  

  if (props.tasks === 0) {
    return <h1>No hay tareas</h1>;
  }
  //console.log(props.tasks)
  return (
    <>
      {props.tasks.map((t) => (
        <div key={t.id}>
          <TaskCard task={t}/>
        </div>
      ))}
    </>
  );
}

export default TaskList;
