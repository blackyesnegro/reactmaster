import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header>
        <h1>Blackyesnegro Web</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/curricullum">Curricullum</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}
