

// src/components/TemperatureConverterUI.js
import React from 'react';

 function ConversorTemperaturaUI({ celsius, fahrenheit, estado, cambioCelsius, cambioFarenheit, frioImg, calienteImg }) {
 //Renderizamos el contendio
 return (
    <div className="Title">
      <h1>C O N V E R S O R &nbsp;&nbsp;  D E &nbsp;&nbsp; T E M P E R A T U R A</h1>
      <div className="container">
        <div className="converter">
          <div>
            <img src={frioImg} className="frio-icon" />
            <img src={calienteImg} className="caliente-icon" />
            <label>C E L S I U S</label>
            <input 
              type="number" 
              value={celsius}
              onChange={cambioCelsius}
              placeholder="Ingresa grados Celsius"
              className="input-number"
            />
          </div>
          <div>
            <label>F A H R E N H E I T</label>
            <input 
              type="number" 
              value={fahrenheit}
              onChange={cambioFarenheit}
              placeholder="Ingresa grados Fahrenheit"
              className="input-number"
            />
          </div>
        </div>
        <div className="result">
          <h3>El agua {estado}</h3>
        </div>
      </div>
    </div>
  );
}

export default ConversorTemperaturaUI ;


    