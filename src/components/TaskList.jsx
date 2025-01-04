import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskList() {
  const {deleteTask, tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }
  //console.log(props.tasks)
  return (
    <div className = "grid grid-cols-4 gap-2">
      {tasks.map((t) => (
        <div key={t.id}>
          <TaskCard task={t}/>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
