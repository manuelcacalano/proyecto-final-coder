import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div style={{ border: "2px solid lightgrey", margin: "10px" }} key={item.id}>
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}>Item</Link>
      <br />
      <br />
    </div>
  );
}