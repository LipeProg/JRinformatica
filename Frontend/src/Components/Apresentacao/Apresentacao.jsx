// Importa o React e os componentes da biblioteca Material UI necessários
import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';

// Importa a imagem que será usada na apresentação
import apresentacao from '../../assets/apresentacao.jpg';

// Define o componente funcional Apresentacao
export default function Apresentacao() {
  return (
    // Componente Box serve como contêiner principal da seção
    <Box
      id="apresentacao" // ID para facilitar a navegação com âncoras
      sx={{
        width: '100%', 
        height: { xs: 'auto', md: 'auto' }, 
        backgroundColor: '#003366', 
        color: '#fff', 
        py: { xs: 10, md: 12 }, // padding vertical (top e bottom) para diferentes tamanhos de tela
      }}
    >
      {/* Container centraliza e organiza o conteúdo horizontalmente */}
      <Container maxWidth={false}>

        {/* Grid container organiza os elementos em linhas e colunas */}
        <Grid
          container
          spacing={4} // espaçamento entre os itens
          alignItems="center" // alinha verticalmente ao centro
          justifyContent="center" // centraliza horizontalmente
        >

          {/* Grid item para o texto à esquerda */}
          <Grid item xs={12} md={6}>
            {/* Título principal */}
            <Typography variant="h3" fontWeight="bold">
              Soluções RPA para <br /> automações inteligentes
            </Typography>

            {/* Texto secundário */}
            <Typography variant="body1" sx={{ mb: 3 }}>
              Soluções tecnológicas para aprimorar a gestão, análise e execução de tarefas no dia a dia.
            </Typography>

            {/* Botão de chamada para ação */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4da6ff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#3399ff', 
                },
              }}
            >
              Fale Conosco
            </Button>
          </Grid>

          {/* Grid item para a imagem à direita */}
          <Grid item xs={12} md={12}>
            {/* Imagem da apresentação */}
            <Box
              component="img"
              src={apresentacao}
              alt="Imagem RPA"
              sx={{
                width: { xs: '100%', md: '750px' }, // largura 100% no mobile, 750px no desktop
                maxHeight: { xs: 300, md: 400 }, // altura máxima dependendo do tamanho da tela
                objectFit: 'contain', // garante que a imagem seja redimensionada proporcionalmente
                borderRadius: 2, 
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
