import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CartWidget from './CartWidget';
import MenuNavbar from './MenuNavbar';

const pages = [
  { label: "Home", link: "/" },
  { label: "Checkout", link: "/checkout" },
  { label: "Contacto", link: "/contacto" },
  { label: "Remeras", link: "/category/remeras" },
  { label: "CD", link: "/category/cd" },
  { label: "Vinilos", link: "/category/vinilos" },
];

 export default function Navbar() {

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
          <Typography href="/" variant="h6" component="a" nowrap sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOVE IS A SPACESHIP MERCH
          </Typography>
          <Button color="inherit">
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


