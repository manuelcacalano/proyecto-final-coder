import React from 'react';
import Item from "./Item";
export default function ItemList({ productos }) {
  return (
    <div style={{margin: "10px" }}>
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}