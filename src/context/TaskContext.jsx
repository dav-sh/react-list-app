import { createContext } from "react";

//Context name
export const TaskContext = createContext();

//Provider  -- Component
export function TaskContextProvider(prop) {
  let x = 20;
  return (<TaskContext.Provider value={x}>{prop.children}</TaskContext.Provider>);
}
