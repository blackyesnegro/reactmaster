import React from 'react';
import { useEffect, useState } from 'react';
import { AvisoComponent } from './AvisoComponent';

export const ComponentEffect = () => {

    const [yearNow, setYear] = useState('2022');
    const [name, setName] = useState('JuanP');
    const [contador, setContador] = useState(0);    

    const cambiarName = e => {
        let dato = e.target.value;
        setName(dato);
    }

     useEffect(() => {
        console.log("Esto es el useEffect.");

        return () => {
            console.log('Se ha cerrado el Componente.');
        }
    }, []);

     useEffect(() => {
        setContador(contador+1);
        console.log("Cambio en YEAR: " + contador);
    }, [yearNow]);

    return (
        <div>
            <hr />
            <h3>Componente Effect</h3>
            <p className='label'>{name}</p>
            <p>
                Escribe lo que quieras: <input onChange={cambiarName} type='text'></input>
            </p>
            {name === 'JuanP' && <AvisoComponent />}

        </div>
    )
}