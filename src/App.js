import { useState } from "react";
import "./App.css";
import CrearTarea from "./components/CrearTarea";

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: "primera tarea", done: false },
    { name: "segunda tarea", done: false },
    { name: "tercera tarea", done: false },
  ]);

  function crearTarea() {
    alert("hola")
  }

  return (
    <div className="App">
      <CrearTarea crearTarea={crearTarea}/>

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
