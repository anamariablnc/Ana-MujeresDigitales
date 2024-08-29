//Importamos react

import React from 'react';

//Definimos el modulo
const ProductoItem = ({ nombre, descripcion, precio, imagen, onViewDetails }) => {
   
  return (
    <div className="ProductoItem">
      <img src={imagen} alt={nombre} className="ProductoItem__imagen" />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>{descripcion}</p>
      <button onClick={onViewDetails}>Detalles</button>
    </div>
  );
};

//Exportamos el componente o modulo
export default ProductoItem;
