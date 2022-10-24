import React, {useRef} from 'react'

export const Formulario = () => {

    const nombreValue = useRef('JuanP');
    const apellidosValue = useRef();
    const emailValue = useRef();
    const miCaja = useRef();

    const mostrarUser = e => {
        e.preventDefault();


        //Micaja
        let {current: caja} = miCaja;
        caja.classList.add('fondo-verde');
        caja.innerHTML = 'Genial!';

        
    }

  return (
    <div>
        <h1>Formulario</h1>
        <h3 ref={miCaja} className="micaja">Exito</h3>
        <form onSubmit={mostrarUser}>
            <input type="text" placeholder='Nombre' ref={nombreValue}/>
            <input type="text" placeholder='Apellidos' ref={apellidosValue} />
            <input type="email" placeholder='Email' ref={emailValue} />
            <input type='submit' value="Aceptar" />
        </form>
    </div>
  )
}
