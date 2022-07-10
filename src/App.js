import { useState, useEffect } from "react";
import "./App.css";
import CrearTarea from "./components/CrearTarea";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  function crearTarea(tarea) {
    if (!taskItems.find((task) => task.name === tarea)) {
      setTaskItems([...taskItems, { name: tarea, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <CrearTarea crearTarea={crearTarea} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody>
          {taskItems.map((task) => {
            return (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
