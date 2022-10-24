import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ItemListContainer() {
  return (
    <div style={{ display:'flex', justifyContent:'start', marginTop: 50, marginLeft: 50}}>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287142.jpg&fm=jpg"
          alt="love is a spaceship logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bienvenido!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bienvenido a la tienda de Love Is a Spaceship, donde podras adquirir tanto su música en formato físico como su merchandising.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}