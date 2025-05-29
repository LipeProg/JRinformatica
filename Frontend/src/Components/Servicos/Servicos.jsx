import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import servicos1 from '../../assets/Servicos1.jpg'
import Servicos2 from '../../assets/Servicos2.jpg';        // substitua pelo seu caminho real

export default function Servicos() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
      {/* Linha 1 - Automação de Processos */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Automação de <br /> Processos
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Simplifique e otimize fluxos de trabalho com soluções inteligentes que automatizam tarefas repetitivas, permitindo que sua equipe foque no que realmente importa.
          </Typography>
          <Button variant="contained" sx={{ textTransform: 'none' }}>
            Saiba mais →
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={servicos1}
            alt="Automação"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>

      {/* Linha 2 - Software Personalizados */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Servicos2}
            alt="Ícones circulares"
            sx={{ width: '100%', maxWidth: 500, mx: 'auto', display: 'block' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Software <br /> Personalizados
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Desenvolvemos soluções de software sob medida para atender às necessidades específicas do seu negócio.
          </Typography>
          <Button variant="contained" sx={{ textTransform: 'none' }}>
            Saiba mais →
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
