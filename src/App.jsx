import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      {console.log("Hola")}
      <div className="container mx-auto ">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
