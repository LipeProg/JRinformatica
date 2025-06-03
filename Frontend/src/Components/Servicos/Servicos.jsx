import React, { useState } from 'react';  // Importar useState aqui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CartaoInfo from '../cards/cartao1';
import CartaoInfo2 from '../cards/cartao2';

export default function Servicos() {
  const [expandidoId, setExpandidoId] = useState(null);

  const handleExpandir = (id) => {
    setExpandidoId(prev => (prev === id ? null : id));
  };

  return (
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Grid
        id="servicos"
        container
        spacing={2}
        justifyContent="center"
        sx={{ backgroundColor: '#fff',
              padding: 2,
              width: '100%',
              scrollMarginTop: '80px',
              px: { xs: 2, md: 10 },
              py: { xs: 6, md: 10 },
           }}
      >
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
          <CartaoInfo
            id={1}
            titulo="Automação de Processos"
            imagem="/static/images/cards/paella.jpg"
            descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
            conteudoExpandido={[
              "Texto expandido 1",
              "Texto expandido 2",
            ]}
            expandido={expandidoId === 1}
            aoClicarExpandir={() => handleExpandir(1)}
          />
        </Grid>


        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
          <CartaoInfo2
            id={2}
            titulo="Outra Automação"
            imagem="/static/images/cards/paella.jpg"
            descricao="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
            conteudoExpandido={[
              "Texto expandido 1",
              "Texto expandido 2...",
              "Texto expandido 3...",
              "Texto expandido 4...",
            ]}
            expandido={expandidoId === 2}
            aoClicarExpandir={() => handleExpandir(2)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
