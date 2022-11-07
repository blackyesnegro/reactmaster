import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [gestorName, setGestor] = useState("Jp");
  const [pagina, setPagina] = useState(1);

  useEffect(() =>{
    console.log("La vista se ha actualizado");
  },[])

  const gestorInput = useRef();

  //Se puede hacer sin el useRef. Mediante e.target.value
  const asignarGestor = e => {
    setGestor(gestorInput.current.value);
  }

  return (
    <div>
        <h1>Nombre del Gestor: {gestorName}</h1>
        <input type="text" ref={gestorInput} onChange={asignarGestor} placeholder="Introduce nombre de Gestor" />
        <h3>Listado Empleados: </h3>
        <p>Los empleados gestionados por "{gestorName}", vienen de JsonPlaceholder</p>
        <button onClick={() => {setPagina(1)}}>Pagina 1</button>
        <button onClick={() => {setPagina(2)}}>Pagina 2</button>
        <p>Estas en la pagina: {pagina}</p>
        <Empleados pagina={pagina} />
    </div>
  )
}
