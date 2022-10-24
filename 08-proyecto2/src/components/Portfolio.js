import React from 'react';
import {Link} from 'react-router-dom';
import {trabajos} from '../data/trabajos'

export const Portfolio = () => {
  return (
    <div className='page'>
        <h1 className='heading'>Portfolio</h1>
        
        {
          trabajos.map (trabajo => {
            return(
              <article key={trabajo.id}>
                <div className='mask'>
                  <img src={'/images/' + trabajo.id + '.jpg'} />
                </div>
                <h2><Link to={'/proyecto/' + trabajo.nombre}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            )
          })
        }
    </div>
  )
}
