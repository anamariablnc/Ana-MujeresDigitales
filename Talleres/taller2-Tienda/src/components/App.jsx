import React, { useState } from 'react';
import DetallesModal from '../components/DetallesModal';
import ListaProductos from '../components/ListaProductos';
import CarritoModal from '../components/CarritoModal';
import carritoImg from '../assets/images/Carrito-Icono.png';
import camisaImg from '../assets/images/Camisa.png';
import sacoImg from '../assets/images/Saco.png';
import camisaRImage from '../assets/images/camisa-R.png';
import '../styles/App.css';

const App = () => {
  const [products] = useState([
    { nombre: '1848 Camisa', precio: 90000, imagen: camisaImg },
    { nombre: 'Van Gogh Saco', precio: 120000,   imagen: sacoImg },
    { nombre: 'Raise your head Camisa', precio: 40000 , imagen: camisaRImage }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const handleOpenCart = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartModalOpen(false);
  };

  const handleCloseDetails = () => {
    setIsDetailsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Tienda de Productos</h1>
      <button className="carrito-button-img" onClick={handleOpenCart}>
        <img src={carritoImg} alt="Carrito" />
      </button>
      <CarritoModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
      />
      <DetallesModal
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetails}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
      <ListaProductos products={products} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default App;
