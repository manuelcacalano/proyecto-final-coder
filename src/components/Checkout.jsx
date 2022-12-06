import React, {useContext} from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";
import {getFirestore, addDoc, collection } from 'firebase/firestore';

export default function Checkout() {
  const { carrito, totalAPagar } = useContext(contextoGeneral); 
  const [nombre, setNombre]=useState('');
  const [tel, setTel]=useState('');
  const [mail, setMail]=useState('');

  function handleClickBuyButton(){
     alert(nombre + " " + tel + " " + mail+ ' quiere comprar ' + JSON.stringify(carrito) + " total a pagar: " + totalAPagar);
     const pedido = {
      comprador: {nombre, tel, mail},
      carrito,
      total: totalAPagar,
     };

     const db=getFirestore();
     const pedidos=collection(db, 'pedidos');
     addDoc(pedidos, pedido).then((pedidoInsertado)=>{
      console.log(pedidoInsertado.id);
     });

  }
  return <div>
    <div>{carrito.map((item)=>(<p>{item.name + " " + item.precio + " " + item.quantity}</p>))}</div>
    <div> Total a pagar: ${totalAPagar}</div>
    <div>
      <input placeholder="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
      <input placeholder="tel" value={tel} onChange={(e)=> setTel(e.target.value)}/>
      <input placeholder="mail" value={mail} onChange={(e)=> setMail(e.target.value)}/>
      <br />
      <input type="button" onClick={handleClickBuyButton} value = "comprar"/>
    </div>
  </div>;
}