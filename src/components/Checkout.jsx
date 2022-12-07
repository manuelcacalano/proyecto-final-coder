import React, {useContext} from "react";
import { useState } from "react";
import { contextoGeneral } from "./ContextContainer";
import {getFirestore, addDoc, collection } from 'firebase/firestore';

export default function Checkout() {
  const { carrito, totalAPagar,clear, removeItem } = useContext(contextoGeneral); 
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
      clear(carrito);
     });

  }
  return <div style={{ justifyContent:"center",display:"grid",backgroundColor:"#F2DEBA",border: "2px solid black"}}>
    <div>
      {carrito.map((item) => (
        <div>{"Producto: "+item.name+" / Cantidad: "+item.quantity}<span onClick={()=>removeItem(item.id)}>🗑️</span></div>
      ))}
    </div>
    <div> Total a pagar: ${totalAPagar}</div>
    <div><input type="button" onClick={()=>clear(carrito)} value="Limpiar carrito" /></div>
    <div>
      <input placeholder="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
      <input placeholder="tel" value={tel} onChange={(e)=> setTel(e.target.value)}/>
      <input placeholder="mail" value={mail} onChange={(e)=> setMail(e.target.value)}/>
      <br />
      <input type="button" onClick={handleClickBuyButton} value = "Completar compra"/>
    </div>
  </div>;
}