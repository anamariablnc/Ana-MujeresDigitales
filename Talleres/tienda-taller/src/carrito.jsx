//Importamos el react y el archivo de estilos del carrito
import React from 'react';
import './CarritoEstilos.css';

//Definimos el modulo

const CarritoModal = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  const totalPrecio = cartItems.reduce((total, item) => total + item.precio, 0);

  //Retornamos el modulo
  return (
    <div className="carrito-modal">
      <div className="carrito-modal-content">
        <button className="carrito-modal-close" onClick={onClose}>X</button>
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
        )}
        <p>Tota: ${totalPrecio.toFixed(2)}</p>
      </div>
    </div>
  );
};

//Exportamos el modulo

export default CarritoModal;
