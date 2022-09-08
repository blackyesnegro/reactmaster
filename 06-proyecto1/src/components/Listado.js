import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {
  
  //const [listadoState, setListadoState] = useState([]);
  
  useEffect(() =>{
    conseguirPeliculas();
    console.log('COnseguidas!');
  },[])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Pelis'));

    setListadoState(peliculas);
  }

  const borrarPeli = (peli) => {
    //Conseguir pelis almacenadas

    //Filtrar las pelis eliminando del array la que quiero mediante filter

    //Actualizar estado del listado

    //Actualizar localStorage
    
  }


  return (
    <>
      {listadoState != null ? 
            listadoState.map(peli => {
              return(
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>

                    <button className="edit">Editar</button>
                    <button className="delete" onClick={() =>{borrarPeli(peli.id)}}>Borrar</button>
                </article>
              )

      })  
      : <h2>No hay peliculas</h2>
    }
    </>
  )
}
