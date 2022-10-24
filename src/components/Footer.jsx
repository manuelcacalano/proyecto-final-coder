import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Footer() {
    return(
       
        <Box sx={{ flexGrow: 1}}>
       <AppBar position="fixed" color = "secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hecho por <a href="https://github.com/manuelcacalano" target="_blank"> Manuel Cacalano </a>para <a class="text-decoration-none"  href="https://www.coderhouse.com/" target="_blank" >Coderhouse</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>      
    )
}


/*<>

</>*/