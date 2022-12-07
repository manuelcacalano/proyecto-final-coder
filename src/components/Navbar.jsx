import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CartWidget from './CartWidget';
import MenuNavbar from './MenuNavbar';
import { Link } from "react-router-dom";
import { contextoGeneral } from './ContextContainer';



const pages = [
  { label: "Home", link: "/" },
  { label: "Checkout", link: "/checkout" },
  { label: "Remeras", link: "/category/remeras" },
  { label: "CD", link: "/category/cd" },
  { label: "Vinilos", link: "/category/vinilos" },
];

 export default function Navbar() {
  const { carrito } = React.useContext(contextoGeneral);
  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(carrito.reduce((acc, item) => acc + item.quantity, 0));
  }, [carrito]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          <MenuNavbar />
                 
          </IconButton>
          <Link to="/" >
          <Typography variant="h6" component="a"  >
            LOVE IS A SPACESHIP MERCH
          </Typography>
          </Link>
          <Link to="/checkout">
          <Button color="inherit"  component="a">
          <CartWidget cant={cant} />
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


