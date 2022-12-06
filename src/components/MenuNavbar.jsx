import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function MenuNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Categorías
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem><Link onClick={handleClose} to="/category/remeras" component="a">Remeras</Link></MenuItem>
        <MenuItem><Link onClick={handleClose} to="/category/cd" component="a">CD</Link></MenuItem>
        <MenuItem><Link onClick={handleClose} to="/category/vinilos" component="a">Vinilos</Link></MenuItem>
      </Menu>
    </div>
  );
}