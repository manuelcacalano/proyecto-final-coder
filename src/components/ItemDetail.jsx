import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { contextoGeneral } from '../components/ContextContainer';

export default function ItemDetail({ producto }) {
  const { carrito, addItem } = useContext(contextoGeneral);
  function onAdd(cant) {
    addItem(producto, cant);
  }
  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      {producto.id ? (
        <>
          <a href=''><img src={producto.imgUrl} width="200" height="200"/></a>
          <br />
          {producto.name}
          <br />
          Categoría: {producto.category}
          <br />
          Precio: ${producto.precio}
          <br />
          Stock: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}