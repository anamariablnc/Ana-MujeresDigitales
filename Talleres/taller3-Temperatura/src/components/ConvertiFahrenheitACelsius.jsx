

// Función para recibir y convertir Fahrenheit a Celsius
export const convertirFahrenheitACelsius = (fahrenheitValor, setFahrenheit, setCelsius, setEstado) => {
    setFahrenheit(fahrenheitValor);
  
    if (fahrenheitValor !== '') {
      // Convertir Fahrenheit a Celsius
      const celsiusValor = (fahrenheitValor - 32) * 5 / 9;
      // Se inicializa setCelsius con el contenido de celsiusValor
      setCelsius(celsiusValor);
  
      // Bloque de condicionales para verificar si el agua hierve o no
      if (celsiusValor >= 100) {
        setEstado('Hierve');
        // Creamos una clase para personalizar que solo se visualizara cuando los grados sean mayores a 100
        document.body.className = 'background-red';
      } else if (celsiusValor < 100) {
        setEstado('no Hierve');
        // Creamos una clase para personalizar que solo se visualizara cuando los grados sean menores a 100
        document.body.className = 'background-blue';
      }
    } else {
      setCelsius('');
      setEstado('');
    }
  };
  