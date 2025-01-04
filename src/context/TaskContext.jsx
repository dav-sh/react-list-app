import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";
//Context name
export const TaskContext = createContext();

//Provider  -- Component
export function TaskContextProvider(prop) {
    const [tasks, setTasks] = useState([]);

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
    
      useEffect(() => {
        setTasks(data);
      }, []);
    

  return (<TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask,

  }}>{prop.children}</TaskContext.Provider>);
}
