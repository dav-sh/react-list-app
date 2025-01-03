import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";
console.log(data);
function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <>
      {tasks.map((t) => (
        <div key= {t.id}>
          <h1>tarea</h1>
          <button>{t.name}</button>
          <p>{t.desc}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
