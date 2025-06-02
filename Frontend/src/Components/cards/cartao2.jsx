import React from 'react';
import { Grid } from '@mui/material';
import {
  Card as Cartao,
  CardHeader as CabecalhoCartao,
  CardContent as ConteudoCartao,
  CardMedia as ImagemCartao,
  CardActions as AcoesCartao,
  IconButton as BotaoIcone,
  Typography as Tipografia,
  Collapse as Colapsar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { shouldForwardProp } from '@mui/system';



const ExpandirMais = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expandido',
})(({ theme, expandido }) => ({
  transform: !expandido ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CartaoInfo2 = ({ id, titulo, imagem, descricao, conteudoExpandido, expandido, aoClicarExpandir }) => {
  return (
    <Grid item xs={12} sm={6} sx={{justifyContent: 'center', mb: 10, mr: { xs: 0, sm: 40 } }}>
      <Cartao sx={{ width: '500px', backgroundColor: '#043873' }}>
        <CabecalhoCartao title={titulo} sx={{ color: '#fff' }} />
        <ImagemCartao component="img" height="194" image={imagem} />
        <ConteudoCartao>
          <Tipografia variant="body2" sx={{ color: '#fff' }}>
            {descricao}
          </Tipografia>
        </ConteudoCartao>

        <AcoesCartao disableSpacing>
          <ExpandirMais
            expandido={expandido}
            onClick={aoClicarExpandir}
            aria-expanded={expandido}
            aria-label="mostrar mais"
          >
            <ExpandMoreIcon sx={{ color: '#fff' }} />
          </ExpandirMais>
        </AcoesCartao>

        <Colapsar in={expandido} timeout="auto" unmountOnExit>
          <ConteudoCartao>
            <Tipografia sx={{ marginBottom: 2, color: '#fff' }}>
              Como Funciona:
            </Tipografia>
            {conteudoExpandido.map((texto, index) => (
              <Tipografia key={index} sx={{ marginBottom: 2, color: '#fff' }}>
                {texto}
              </Tipografia>
            ))}
          </ConteudoCartao>
        </Colapsar>
      </Cartao>
    </Grid>
  );
};

export default CartaoInfo2;