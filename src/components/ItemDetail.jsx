import { Info } from "@mui/icons-material";
import React from "react";
import { productosHC } from "./data";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("quiere agregar " + x + " de este item: " + producto.name);
  }
  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      {producto.id ? (
        <>
          <a href=''><img src={producto.image} width="200" height="200"/></a>
          <br />
          {producto.name}
          <br />
          Categoría: {producto.category}
          <br />
          Precio: ${producto.precio}
          <br />
          Stock: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} addItem={addItem} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}