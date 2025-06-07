// Importa o React e o hook useState para gerenciar estados no componente
import React, { useState } from 'react';

// Importa o utilitário styled do MUI (não está sendo usado neste código)
import { styled } from '@mui/material/styles';

// Importa componentes do MUI (Material UI)
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// Importa dois componentes personalizados, que provavelmente são cartões com conteúdo expandível
import CartaoInfo from '../cards/cartao1';
import CartaoInfo2 from '../cards/cartao2';

// Define e exporta o componente funcional chamado Servicos
export default function Servicos() {
  // Estado para controlar qual cartão está expandido (null = nenhum)
  const [expandidoId, setExpandidoId] = useState(null);

  // Função chamada quando o usuário clica para expandir ou recolher um cartão
  const handleExpandir = (id) => {
    // Se o cartão clicado já está expandido, recolhe ele; caso contrário, expande
    setExpandidoId(prev => (prev === id ? null : id));
  };

  return (
    // Container com largura máxima, sem padding externo
    <Container maxWidth={false} sx={{ padding: 0 }}>
      
      
      {/* Grid principal que contém os cartões */}
      <Grid
        id="servicos"  // ID usado para rolagem da página
        container
        spacing={2}  // Espaçamento entre os itens
        justifyContent="center"  // Centraliza horizontalmente os itens
        sx={{ 
          backgroundColor: '#fff',  // Cor de fundo branca
          padding: 2,
          width: '100%',
          scrollMarginTop: '80px',  // Margem para scroll suave
          px: { xs: 2, md: 10 },  // Padding horizontal responsivo
          py: { xs: 6, md: 10 },  // Padding vertical responsivo
        }}
      >

        {/* Primeiro cartão */}
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
            expandido={expandidoId === 1}  // Expande somente se o ID for igual ao atual
            aoClicarExpandir={() => handleExpandir(1)}  // Função para expandir ou recolher
          />
        </Grid>

        {/* Segundo cartão */}
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
