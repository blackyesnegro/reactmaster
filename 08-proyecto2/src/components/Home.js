import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <h1>
          Hola, soy Victor Robles y soy Desarrollador Web en Madrid,
          y ofrezco mis servicios de programación y desarrollo en
          todo tipo de proyectos web.
        </h1>
        <h2>
          Te ayudo a crear tu sitio o aplicación web, tener más
          visibilidad y relevancia en internet.
          <Link to='/contact'>Contacta conmigo</Link>
          
        </h2>
        <section className = 'lasts-works'>
          <h2>Algunos de mis proyectosk</h2>
          <p>ALgunos de mis trabajos</p>
          <div className='works'>
            
          </div>
        </section>
    </div>
  )
}
