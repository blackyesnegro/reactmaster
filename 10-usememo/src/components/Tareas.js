import React, { useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);

    const guardarTarea = (e) => {
        e.preventDefault();

        setTareas((tarea) => [...tarea, e.target.titulo.value]);

        console.log('Se ha guardado la tarea: ' + e.target.titulo.value);
        console.log(tareas);
    }

  return (
    <div>
        <h1>Tareas</h1>
        <form onSubmit={guardarTarea}>
            <input type="text" name='titulo' placeholder='Introduce el nombre de la tarea.' />
            <input type='submit' value='Enviar' />
        </form>
        <hr />
        <h3>Lista de Tareas</h3>
        <ul>
            {
                tareas.map((tarea, indice) => {
                    return <li key={indice}>{tarea}</li>
                })
            }
        </ul>
    </div>
  )
}
