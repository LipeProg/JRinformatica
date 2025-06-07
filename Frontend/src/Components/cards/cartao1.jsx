// Importa o React
import React from 'react';

// Importa o componente Grid do Material UI
import { Grid } from '@mui/material';

// Importa e renomeia os componentes do Material UI para nomes em português
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

// Importa ícones usados no cartão
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Importa a função styled para estilização personalizada
import { styled } from '@mui/material/styles';

// Importa novamente o IconButton (nesse caso, você pode remover esse segundo `import IconButton`)
import IconButton from '@mui/material/IconButton';

// Importa utilitário para controle de propriedades (utilizado na estilização)
import { shouldForwardProp } from '@mui/system';


// Cria um botão personalizado com animação de rotação baseado no estado `expandido`
const ExpandirMais = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expandido', // evita passar a prop 'expandido' pro DOM
})(({ theme, expandido }) => ({
  transform: !expandido ? 'rotate(0deg)' : 'rotate(180deg)', // rotaciona o botão quando expandido
  marginLeft: 'auto', // empurra para o canto direito
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest, // animação suave
  }),
}));

// Componente funcional que representa um cartão com conteúdo colapsável
const CartaoInfo = ({ id, titulo, imagem, descricao, conteudoExpandido, expandido, aoClicarExpandir }) => {
  return (
    // Cada cartão ocupa metade da largura na tela pequena e 100% na tela menor
    <Grid item xs={12} sm={6} sx={{ justifyContent: 'center', mb: 10, mr: { xs: 0, sm: 40 } }}>
      
      <Cartao 
        sx={{ 
          width: '100%',
          maxWidth: 500,             // largura máxima do cartão
          backgroundColor: '#043873' // fundo azul escuro
        }}
      >
        {/* Cabeçalho do cartão com o título */}
        <CabecalhoCartao title={titulo} sx={{ color: '#fff' }} />
        
        {/* Imagem do cartão */}
        <ImagemCartao component="img" height="194" image={imagem} />
        
        {/* Conteúdo principal do cartão com a descrição */}
        <ConteudoCartao>
          <Tipografia variant="body2" sx={{ color: '#fff' }}>
            {descricao}
          </Tipografia>
        </ConteudoCartao>

        {/* Ações do cartão - neste caso, botão para expandir */}
        <AcoesCartao disableSpacing>
          <ExpandirMais
            expandido={expandido}         // estado atual (expandido ou não)
            onClick={aoClicarExpandir}    // função chamada ao clicar
            aria-expanded={expandido}     // acessibilidade
            aria-label="mostrar mais"
          >
            <ExpandMoreIcon sx={{ color: '#fff' }} />
          </ExpandirMais>
        </AcoesCartao>

        {/* Conteúdo extra que aparece ao expandir o cartão */}
        <Colapsar in={expandido} timeout="auto" unmountOnExit>
          <ConteudoCartao>
            <Tipografia sx={{ marginBottom: 2, color: '#fff' }}>
              Como Funciona:
            </Tipografia>

            {/* Lista de textos adicionais */}
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

// Exporta o componente para ser usado em outros arquivos
export default CartaoInfo;