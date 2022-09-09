import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {
  
  //const [listadoState, setListadoState] = useState([]);
  
  useEffect(() =>{
    conseguirPeliculas();
  },[])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Pelis'));

    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {
    //Conseguir pelis almacenadas
      let pelis_recuperadas = conseguirPeliculas();
      console.log(pelis_recuperadas);
    //Filtrar las pelis eliminando del array la que quiero mediante filter
      let pelis_filtradas = pelis_recuperadas.filter(peli => peli.id !== parseInt(id));
      console.log(pelis_filtradas);

    //Actualizar estado del listado
    setListadoState(pelis_filtradas);

    //Actualizar localStorage
    localStorage.setItem('Pelis', JSON.stringify(pelis_filtradas));
    
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
