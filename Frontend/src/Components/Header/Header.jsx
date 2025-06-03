import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

function Header() {
  return (
     <AppBar position="fixed" sx={{ backgroundColor: '#043873' }}>


      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#apresentacao" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            JR <span style={{ color: '#ffffffaa' }}>Informatica</span>
          </Typography>
        </a>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button component="a" href="#servicos" color="inherit">Serviços</Button>
          <Button component="a" href="#quemsou" color="inherit">Sobre nós</Button>
        </Box>

        {/* Botão de contato */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4da6ff',
            color: '#fff',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#3399ff',
            },
          }}
        >
          Contato →
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header