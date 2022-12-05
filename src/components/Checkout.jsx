import React, {useContext} from "react";
import { contextoGeneral } from "./ContextContainer";
export default function Checkout() {
  const { carrito, totalAPagar } = useContext(contextoGeneral); 
  console.log(carrito)
  return <div>
    <div>{JSON.stringify(carrito)}</div>
    <div>{carrito.map((item)=>(<p>{item.name + " " + item.precio + " " + item.quantity}</p>))}</div>
    <div> Total a pagar: ${totalAPagar}</div>
  </div>;
}