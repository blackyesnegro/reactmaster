import React from 'react'

export const Editar = ({peli,conseguirPeliculas,setEditar,setListadoState}) => {

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        //Conseguir el target del evento
        const target = e.target;

        //Buscar el indice del objeto a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
        
        //Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo:target.titulo.value,
            descripcion:target.descripcion.value
        }

        //ACtualizamos el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

        //Actualizamos localStorage
        localStorage.setItem('Pelis', JSON.stringify(pelis_almacenadas));
        

        //Actualizamos estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>Editar</h3>

        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input 
                type="text"
                name="titulo"
                className='titulo_editado'
                defaultValue={peli.titulo}
            /> 
            <textarea
                type="textarea"
                name="descripcion"
                className='descripcion_editada'
                defaultValue={peli.descripcion}
            />
            <input
                type="submit"
                name="confirmar"
                value="Confirmar"
            />
        </form>
    </div>
  )
}
