import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de Control</h1>
        <p>Elige una de las opciones</p>
        <nav>
            <ul>
                <li><NavLink to="/panel/inicio">Inicio</NavLink></li>
                <li><NavLink to="/panel/crear-articulo">Crear Aticulos</NavLink></li>
                <li><NavLink to="/panel/gestion-usuarios">Gestión de Usuarios</NavLink></li>
                <li><NavLink to="/panel/acerca-de">Acerca de</NavLink></li>
            </ul>
        </nav>
        <div>
            {/*Cargar componentes de subrutas*/}
            <Outlet />
        </div>
    </div>
  )
}
