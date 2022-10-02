import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom'
import {Articulos} from '../components/Articulos';
import {Inicio} from '../components/Inicio';
import {Contacto} from '../components/Contacto';
import {Error} from '../components/Error';
import {Persona} from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import {InicioPanel} from '../components/panel/InicioPanel';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';


export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink 
              to="/inicio"  
              className={({isActive}) => isActive ? 'activado' : ''}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink 
              to="/articulos"
              className={({isActive}) => isActive ? 'activado' : ''}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink 
              to="/persona"
              className={({isActive}) => isActive ? 'activado' : ''}
            >Persona</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacto"
              className={({isActive}) => isActive ? 'activado' : ''}
            >Contacto</NavLink>
          </li>
          <li>
            <NavLink 
              to="/panel"
              className={({isActive}) => isActive ? 'activado' : ''}
            >Panel de Control</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/persona/:nombre/:apellido" element={<Persona />} />
          <Route path="/persona/:nombre/" element={<Persona />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/redirigir" element={<Navigate to="/persona/JuanP/Amoros"/>} />
          <Route path='/panel/*' element={<PanelControl />}>
            <Route index element={<InicioPanel />}/>
            <Route path="inicio" element={<InicioPanel />}/>
            <Route path="crear-articulo" element={<Crear />}/>
            <Route path="gestion-usuarios" element={<Gestion />}/>
            <Route path="acerca-de" element={<Acerca />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      <hr />
      <footer>Footer</footer>
    </BrowserRouter>
  )
}
