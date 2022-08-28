import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const EjercicioComponent = ({year}) => {
  const [yearNow, setYearNow] = useState(year);
  const siguiente = e => {
    setYearNow(yearNow+1);
  }
  const anterior = e => {
    setYearNow(yearNow-1);
  }
  const cambiarYear = e => {
    let dato = parseInt( e.target.value);

    if(Number.isInteger(dato)){
      setYearNow(dato);
    }
    else{
      setYearNow(year);
    }
    console.log(yearNow);
  }

  return (
        <div>
            <h2>Mi componente del ejercicio</h2>
            <strong className='label label-green'>
                {yearNow }
            </strong>
            <p>
              <button onClick={siguiente}>Siguiente</button>
              <button onClick={anterior}>Anterior</button>
            </p>
            <p>
              Escribir aquí: 
              <input 
                onChange={cambiarYear}
                type="text" 
                placeholder="Introduce un año" />
            </p>
        </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired,
}
