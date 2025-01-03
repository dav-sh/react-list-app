import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([...tasks, task]);
    console.log("actualizado");
  };

  
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
