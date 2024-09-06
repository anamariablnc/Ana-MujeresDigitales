//Importamos react y los estilos de la aplicacion

import React from 'react';
import '../styles/DetallesModal.css';

//Definimos el modulo
const DetallesModal = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

  //Retornamos el modulo
  return (
    <div className="detalles-modal">
      <div className="detalles-modal-content">
        <button className="detalles-modal-close" onClick={onClose}>X</button>
        <img src={product.imagen} alt={product.nombre} />
        <h2>{product.nombre}</h2>
        <p>Precio: ${product.precio}</p>
        <p>{product.descripcion}</p>
        <button onClick={() => {
          onAddToCart(product);
          onClose();
        }}>Agregar al carrito</button>
      </div>
    </div>
  );
};
//Exportamos el modulo o componente

export default DetallesModal;
