

// Importamos y configuramos los componentes necesarios
import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/Caliente.css';
import '../styles/Frio.css';
import frioImg from '../assets/images/frio-Icon.png';  
import calienteImg from '../assets/images/caliente-Icon.png';  
import { convertirFahrenheitACelsius } from './ConvertiFahrenheitACelsius'; 
import { convertirCelsiusAFahrenheit } from './ConvertirCelsiusAFahrenheit';
import ConversorTemperaturaUI from './ConversorTemperaturaUI';






//Creacion del componente App
function App() {
  // Declarando variables: 
  // Celsius - Almacena la temperatura en celsius
  // Fahrenheit - Almacena la temperatura en Fahrenheit
  // estado - Almacena el estado de la temperatura, nos dice si el agua HIERVE o NO HIERVE
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [estado, setEstado] = useState('');

  



//Funcion para recibir y convertir Celsius a  Fahrenheit

  const cambioCelsius = (event) => {
    const celciusValor = event.target.value;
    convertirCelsiusAFahrenheit(celciusValor, setCelsius, setFahrenheit, setEstado);
  };

 



//Funcion para recibir y convertir Fahrenheit a Celsius
  const cambioFarenheit = (event) => {
    const fahrenheitValor = event.target.value;
    convertirFahrenheitACelsius(fahrenheitValor, setFahrenheit, setCelsius, setEstado);
  };



  return (
    <ConversorTemperaturaUI
      celsius={celsius}
      fahrenheit={fahrenheit}
      estado={estado}
      cambioCelsius={cambioCelsius}
      cambioFarenheit={cambioFarenheit}
      frioImg={frioImg}
      calienteImg={calienteImg}
    />
  );

 
}


//Exportamos el componente App
export default App;

