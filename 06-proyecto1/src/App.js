<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { Crear } from './components/Crear';
import { Buscador } from './components/Buscador';
import { Lista } from './components/Lista';

=======

import React from 'react';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';
>>>>>>> d0c66dff4f509987d023f147e320ba00139c7ceb


function App() {
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>Películas</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">
            <Lista />
            {/*aqui van las peliculas*/}
            <Listado />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
<<<<<<< HEAD
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" id="search_field" />
                    <button id="search">Buscar</button>
                </form>
                <Buscador />
            </div>

            <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
                <Crear />
                
            </div>
=======
            <Buscador />

            <Crear />
>>>>>>> d0c66dff4f509987d023f147e320ba00139c7ceb
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React - <a href="https://gironastudio.es">Girona Studio</a>
        </footer>

    </div>
  );
}

export default App;
