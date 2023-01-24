
import './App.css';
import Boton from './componentes/boton'
import Pantalla from './componentes/pantalla';
import Borrar from './componentes/borrar';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const calculaResultado = () => {
    if(input){
      setInput(evaluate(input))
    } else{
      alert('ingrese algun valor para calcular')
    }
  }

 

  return (
    <div className="App">
   
    <div className='cont-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClik={agregarInput}>1</Boton>
        <Boton manejarClik={agregarInput}>2</Boton>
        <Boton manejarClik={agregarInput}>3</Boton>
        <Boton manejarClik={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClik={agregarInput}>4</Boton>
        <Boton manejarClik={agregarInput}>5</Boton>
        <Boton manejarClik={agregarInput}>6</Boton>
        <Boton manejarClik={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClik={agregarInput}>7</Boton>
        <Boton manejarClik={agregarInput}>8</Boton>
        <Boton manejarClik={agregarInput}>9</Boton>
        <Boton manejarClik={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClik={agregarInput}>0</Boton>
        <Boton manejarClik={agregarInput}>.</Boton>
        <Boton manejarClik={calculaResultado}>=</Boton>
        <Boton manejarClik={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
      <Borrar borrado={() => setInput('')}>Borrar</Borrar>  
      </div>  
    </div>
    </div>
  );
}

export default App;
