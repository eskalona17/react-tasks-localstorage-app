import React from "react";
import { useState } from "react";

function CrearTarea({crearTarea}) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea(newTaskName)
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="escribe una tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />

      <button>Guardar tarea</button>
    </form>
  );
}

export default CrearTarea;
