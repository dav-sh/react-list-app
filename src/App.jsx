import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./tasks";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskName) => {
    setTasks([...tasks, {
      id: tasks.length +1,
      name : taskName,
      desc: 'descripcion nueva'
    }]);
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
