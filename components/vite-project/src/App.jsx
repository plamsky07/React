import Task from "./Task";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Props Overview — `children` demo</h1>

      <Task
        firstName="Plamen"
        lastName="Raynov"
        title="Teacher"
        image={reactLogo}
      >
        This is the "children" prop
      </Task>
    </div>
  );
}

export default App;
