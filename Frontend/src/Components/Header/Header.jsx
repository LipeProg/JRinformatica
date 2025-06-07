// Importa o React, necessário para componentes funcionais com JSX
import React from 'react';

// Importa os componentes do Material UI usados na barra de navegação
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

// Define o componente funcional Header
function Header() {
  return (
    // AppBar é a barra superior fixa do Material UI
    <AppBar position="fixed" sx={{ backgroundColor: '#043873' }}>
      {/* Toolbar organiza o conteúdo da AppBar */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* Seção da logo - é um link para a seção #apresentacao da página */}
        <a href="#apresentacao" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            JR <span style={{ color: '#ffffffaa' }}>Informatica</span>
            {/* "Informatica" com opacidade para dar contraste visual */}
          </Typography>
        </a>

        {/* Seção dos links de navegação (serviços e sobre nós) */}
        <Box sx={{ display: 'flex', gap: 3 }}>

          {/* Cada botão é um link para âncoras específicas na página */}
          <Button component="a" href="#servicos" color="inherit">
            Serviços
          </Button>
          <Button component="a" href="#quemsou" color="inherit">
            Sobre nós
          </Button>
        </Box>

        {/* Botão de contato à direita */}
        <Button
          variant="contained" // estilo preenchido
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
  );
}

// Exporta o componente Header para ser usado em outros arquivos
export default Header;
