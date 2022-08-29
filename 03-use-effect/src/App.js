import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ComponentEffect } from './ComponentEffect';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              
          Learn React
          <ComponentEffect />
      </section>
    </div>
  );
}

export default App;
