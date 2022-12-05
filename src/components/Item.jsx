import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { contextoGeneral } from "./ContextContainer";


export default function Item({ item }) {

  const { x } = useContext(contextoGeneral);

  return (
    <div  key={item.id}>
      <Card style={{ textAlign:"center",margin: "10px" }}sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
          <a href={"/item/" + item.id}><img src={item.image} width="200" height="200" alt=""/></a>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.name}
            </Typography>
            <Typography variant="body2"color="text.secondary">
            ${JSON.stringify(item.precio)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ textAlign:"center",justifyContent:"center",margin: "10px" }}>
          <Button size="small" color="secondary">
          <Link to={"/category/" + item.category}>Ver más {JSON.stringify(item.category)}</Link>
          </Button>
          <br/>
          <Button size="small" color="secondary">
          <Link to={"/item/" + item.id}>Detalles</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}