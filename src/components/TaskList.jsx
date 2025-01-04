import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskList() {
  const {deleteTask, tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  //console.log(props.tasks)
  return (
    <>
      {tasks.map((t) => (
        <div key={t.id}>
          <TaskCard task={t}/>
        </div>
      ))}
    </>
  );
}

export default TaskList;
