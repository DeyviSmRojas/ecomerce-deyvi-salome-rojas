import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Nosotros from './components/paginas/Nosotros';
import Productos from './components/paginas/Productos';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
      </Router>

       
        
        

    </div>
  );
}

export default App;
