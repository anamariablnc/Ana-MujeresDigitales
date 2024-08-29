
//Importamos el react y el archivo productItem 
//Para añdir los productos a la lista
import React from 'react';
import ProductoItem from './ProductoItem';

//Definimos el modulo
const ListaProductos = ({ products, onViewDetails }) => {
  return (
    <div className="listaProducto">
      {products.map((product, index) => (
        <ProductoItem
          key={index}
          {...product}
          onViewDetails={() => onViewDetails(product)}
        />
      ))}
    </div>
  );
};

//Exportamos el modulo
export default ListaProductos;
