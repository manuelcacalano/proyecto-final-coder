import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export default function ItemListContainer({ greeting }) {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcategory) {
      productos = query(collection(db, 'productos'), where('category', '==', idcategory));
    } else {
      productos = collection(db, 'productos');
    }

    getDocs(productos).then((res) => {
      console.log(res.docs);
      const arrayNorm = res.docs.map((element) => {
        return { id: element.id, name: element.data().name, category: element.data().category, precio: element.data().precio, stock: element.data().stock, image: element.data().imgUrl };
      });
      console.log(arrayNorm);
      setProductos(arrayNorm);
    });
  }, [idcategory]);

  return (
    <div style={{ justifyContent:"center",display:"grid",backgroundColor:"#F2DEBA",border: "2px solid black"}}>
      <ItemList productos={productos} />
    </div>
  );
}