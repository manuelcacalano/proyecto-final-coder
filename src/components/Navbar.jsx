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
import { contextoGeneral } from '../components/ContextContainer';



const pages = [
  { label: "Home", link: "/" },
  { label: "Checkout", link: "/checkout" },
  { label: "Contacto", link: "/contacto" },
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


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
          <Typography href="/" variant="h6" component="a"  sx={{
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
          <Button color="inherit" href="/checkout" component="a">
          <CartWidget cant={cant} />
          </Button>
          <Typography href="/contacto" component="a"sx={{
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", md: "flex" }
            }}>CONTACTO</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


