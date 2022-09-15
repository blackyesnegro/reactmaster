import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

  //Valores por defecto
  // let {nombre, apellido} = useParams();

  const {nombre, apellido} = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();

    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    console.log(e.target.nombre.value);
    if(nombre.lenght <= 0 && apellido.lenght <= 0){
      navegar('/inicio');
    }else if(nombre === 'contacto'){
      navegar('/contacto')
    }else{
      navegar(url);
    }


  }

  return (
    <div>
      {!nombre ? <h1>Persona General</h1> : <h1>Persona: {nombre} {apellido}</h1>}

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />  
        <input type="text" name="apellido" />  
        <input type="submit" name="enviar" value="enviar" />
      </form>   
    </div>
  )
}
