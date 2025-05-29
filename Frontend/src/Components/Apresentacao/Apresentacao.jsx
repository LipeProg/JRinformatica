import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import apresentacao from '../../assets/apresentacao.jpg';

export default function Apresentacao() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 450 },
        backgroundColor: '#003366',
        color: '#fff',
        py: { xs: 10, md:12},
      }}
    >
      <Container maxWidth={false}>

        <Grid container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >


          {/* Texto à esquerda */}
          <Grid item xs={12} md={6}>


            <Typography variant="h3" fontWeight="bold">
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
              Fale Conosco
            </Button>


          </Grid>

          
          
          {/* Imagem à direita */}
          <Grid item xs={12} md={12}>


            <Box
              component="img"
              src={apresentacao}
              alt="Imagem RPA"
              sx={{
                width: { xs: '100%', md: '750px' },     // 100% no mobile, 80% no desktop
                maxHeight: { xs: 300, md: 400 },      // altura máxima em pixels
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
