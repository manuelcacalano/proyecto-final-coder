import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function Item({ item }) {
  return (
    <div style={{ border: "2px solid lightgrey", margin: "10px" }} key={item.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
          <a href={"/item/" + item.id}><img src={item.image} width="200" height="200"/></a>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {JSON.stringify(item.name)}
            </Typography>
            <Typography variant="body2"color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
          <Link to={"/category/" + item.category}>{JSON.stringify(item.category)}</Link>
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