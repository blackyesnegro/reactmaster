import logo from './logo.svg';
import './App.css';
import React from 'react';
import { EjercicioComponent } from './EjercicioComponent';


function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto es una prueba de commit. Funcionamos!
        </p>
        <EjercicioComponent year={yearActual} />
        
      </section>
    </div>
  );
}

export default App;
