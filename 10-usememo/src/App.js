import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/*Ejercicio con Hook useMemo*/}
        <Tareas />  
        
        {/*Ejercicio con método Memo para componentes*/}
        {/*<Gestion />*/}

      </header>
    </div>
  );
}

export default App;
