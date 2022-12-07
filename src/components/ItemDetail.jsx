import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { contextoGeneral } from './ContextContainer';
export default function ItemDetail({ producto }) {
  const {carrito , addItem } = useContext(contextoGeneral);
  function onAdd(cant) {
    addItem(producto, cant);
    console.log(carrito)
  }
  return (
    <div style={{ justifyContent:"center",display:"grid",backgroundColor:"#F2DEBA",border: "2px solid black"}}>
      {producto.id ? (
        <>
          <a href=''><img src={producto.imgUrl} width="200" height="200"/></a>
          <br />
          {producto.name}
          <br />
          Categoría: {producto.category}
          <br />
          Precio: ${producto.precio}
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}