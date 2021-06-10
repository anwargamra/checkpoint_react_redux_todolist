import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-5">
      <h1>TODO LIST</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
