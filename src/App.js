
import './App.css';
import Boton from './componentes/boton'

function App() {
  return (
    <div className="App">
    <div className='cont-calculadora'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>  
    </div>
    </div>
  );
}

export default App;
