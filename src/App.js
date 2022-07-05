import { useState } from "react";
import "./App.css";
import CrearTarea from "./components/CrearTarea";

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: "primera tarea", done: false },
    { name: "segunda tarea", done: false },
    { name: "tercera tarea", done: false },
  ]);

  function crearTarea(tarea) {
    if (!taskItems.find((task) => task.name === tarea)) {
      setTaskItems([...taskItems, { name: tarea, done: false }]);
    }
  }

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
