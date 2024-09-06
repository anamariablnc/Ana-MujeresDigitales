

// Función para convertir Celsius a Fahrenheit y actualizar el estado
export const convertirCelsiusAFahrenheit = (celciusValor, setCelsius, setFahrenheit, setEstado) => {
    setCelsius(celciusValor);
  
    if (celciusValor !== '') {
      // Convertir Celsius a Fahrenheit  
      const fahrenheitValor = (celciusValor * 9 / 5) + 32;
      setFahrenheit(fahrenheitValor);
  
      // Bloque de condicionales para verificar si el agua hierve o no
      if (celciusValor >= 100) {
        setEstado('Hierve');
        // Creamos una clase para personalizar que solo se visualizara cuando los grados sean mayores a 100
        document.body.className = 'background-red';
      } else {
        setEstado('no Hierve');
        // Creamos una clase para personalizar que solo se visualizara cuando los grados sean menores a 100
        document.body.className = 'background-blue';
      }
    } else {
      setFahrenheit('');
      setEstado('');
    }
  };
  