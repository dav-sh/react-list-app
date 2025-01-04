import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: task.name,
        desc: task.desc,
      },
    ]);
    console.log("actualizado");
  };

  const deleteTask = (task) => {
    console.log(task.id)
    console.log(tasks.filter((n) => n.id !== task.id))
    setTasks(tasks.filter((n) => n.id !== task.id))
  };

  return (
    <>
    {console.log("Hola")}
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
