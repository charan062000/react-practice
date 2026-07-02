
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="App bg-zinc-900 min-h-screen min-w-screen text-white flex flex-col items-center justify-center">
        
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
