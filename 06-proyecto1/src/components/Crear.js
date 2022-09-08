import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir Película";
  const [peliState, setPeliState] = useState({
    titulo:'',
    descripcion:''
  })

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    //Conseguir los datos del Formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }
    
    //Guardar Estado
    setPeliState(peli);

    //Actualiza el estado de ListadoState
    setListadoState(elementos =>{
      return [...elementos, peli];
    });

    //Guardar en el Almacenamiento Local
    GuardarEnStorage('Pelis', peli);

  }

  
  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong className='peli-ok'>
          {(titulo && descripcion) && "Has creado la pelicula:"} <br />{titulo}
        </strong>

        <form onSubmit={conseguirDatosForm}>
            <input 
              type="text" 
              id="titulo" 
              name="titulo"
              placeholder="Titulo" />
            <textarea 
              id="description" 
              name="descripcion"
              placeholder="Descripción"></textarea>
            <input 
              type="submit" 
              id="save" 
              value="Guardar" />
        </form>
    </div>
  )
}
