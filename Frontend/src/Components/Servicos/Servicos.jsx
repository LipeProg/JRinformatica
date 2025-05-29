import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import servicos1 from '../../assets/Servicos1.jpg';
import Servicos2 from '../../assets/Servicos2.jpg';

export default function Servicos() {
  return (
    <Box 
      sx={{ 
        px: { xs: 2, md: 10 }, 
        py: { xs: 6, md: 10 }, 
        backgroundColor: '#fff' 
      }}
    >
      {/* Seção 1 - Automação de Processos */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color='black' gutterBottom>
            Automação de <br /> Processos
          </Typography>
          <Typography variant="body1" color='black'>
            Simplifique e otimize fluxos de trabalho com soluções inteligentes que automatizam tarefas repetitivas, permitindo que sua equipe foque no que realmente importa.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={servicos1}
            alt="Automação"
            sx={{ 
              width: '100%', 
              maxHeight: 400, 
              objectFit: 'cover',
              borderRadius: 2 
            }}
          />
        </Grid>
      </Grid>

      {/* Seção 2 - Softwares Personalizados */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Servicos2}
            alt="Software Personalizado"
            sx={{ 
              width: '100%', 
              maxHeight: 400, 
              objectFit: 'cover', 
              borderRadius: 2 
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color='black' gutterBottom>
            Softwares <br /> Personalizados
          </Typography>
          <Typography variant="body1" color='black'>
            Desenvolvemos soluções de software sob medida para atender às necessidades específicas do seu negócio.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}