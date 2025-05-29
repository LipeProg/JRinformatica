
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
//import imagemRpa from '../assets/imagem-rpa.jpg'; // Substitua com o caminho correto da sua imagem
import apresentacao from '../../assets/apresentacao.jpg';



export default function Apresentacao() {
  return (
    <Box
  sx={{
    width: '100vw',
    height: '600px',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    backgroundColor: '#003366',
    color: '#fff',
    py: { xs: 4, md: 10 },
    display: 'flex',
    alignItems: 'center',
  }}


      
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texto à esquerda */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Soluções RPA para <br /> automações inteligentes
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Soluções tecnológicas para aprimorar a gestão, análise e execução de tarefas no dia a dia.
          </Typography>
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
            Fale Conosco →
          </Button>
        </Grid>

        {/* Imagem à direita */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={apresentacao}
            alt="Imagem RPA"
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}