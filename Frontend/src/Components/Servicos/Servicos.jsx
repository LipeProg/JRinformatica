import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Cartao from '@mui/material/Card';
import CabecalhoCartao from '@mui/material/CardHeader';
import ImagemCartao from '@mui/material/CardMedia';
import ConteudoCartao from '@mui/material/CardContent';
import AcoesCartao from '@mui/material/CardActions';
import Colapsar from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import BotaoIcone from '@mui/material/IconButton';
import Tipografia from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import IconeFavorito from '@mui/icons-material/Favorite';
import IconeCompartilhar from '@mui/icons-material/Share';
import IconeExpandirMais from '@mui/icons-material/ExpandMore';
import IconeMaisOpcoes from '@mui/icons-material/MoreVert';



// Botão de expansão personalizado
const ExpandirMais = styled((props) => {
  const { expandido, ...outros } = props;
  return <BotaoIcone {...outros} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: 'rotate(0deg)',
  '&[aria-expanded="true"]': {
    transform: 'rotate(180deg)',
  },
}));

export default function CartaoReceita() {
  const [expandido, setExpandido] = React.useState(false);

  const aoClicarExpandir = () => {
    setExpandido(!expandido);
  };

  return (
    
    <Container maxWidth={false} sx={{ padding: 0 }}>

        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ backgroundColor: '#fff', padding: 2, width: '100%' }}
          
        >


            <Grid item xs={12} sm={6}
              sx={{ display: 'flex', justifyContent: 'center', mb: 10, mr: { xs: 0, sm: 40 } }}
            >

              <Cartao sx={{ width:'500px', backgroundColor: '#043873' }}>

                <CabecalhoCartao
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="receita">
                      R
                    </Avatar>
                  }
                  action={
                    <BotaoIcone aria-label="configurações">
                      <IconeMaisOpcoes />
                    </BotaoIcone>
                  }
                  title="Paella de Camarão com Chouriço"
                  subheader="14 de Setembro de 2016"
                />
                <ImagemCartao
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Prato de paella"
                />
                <ConteudoCartao>

                  <Tipografia variant="body2" sx={{ color: 'text.secondary' }}>
                    Esta paella impressionante é perfeita para festas e divertida de preparar
                    junto com seus convidados. Adicione 1 xícara de ervilhas congeladas com os mexilhões, se desejar.
                  </Tipografia>

                </ConteudoCartao>


                <AcoesCartao disableSpacing>

                  <BotaoIcone aria-label="adicionar aos favoritos">
                    <IconeFavorito />
                  </BotaoIcone>

                  <BotaoIcone aria-label="compartilhar">
                    <IconeCompartilhar />
                  </BotaoIcone>

                  <ExpandirMais
                    expandido={expandido}
                    onClick={aoClicarExpandir}
                    aria-expanded={expandido}
                    aria-label="mostrar mais"
                  >
                    <IconeExpandirMais />
                  </ExpandirMais>



                </AcoesCartao>

                <Colapsar in={expandido} timeout="auto" unmountOnExit>
                  <ConteudoCartao>

                    <Tipografia sx={{ marginBottom: 2 }}>Modo de preparo:</Tipografia>

                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça 1/2 xícara do caldo em uma panela até começar a ferver, adicione o açafrão e reserve por 10 minutos.
                    </Tipografia>

                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça o óleo em uma paelleira (de 35 a 40 cm) ou em uma frigideira grande e funda em fogo médio-alto.
                      Adicione frango, camarão e chouriço, e cozinhe mexendo ocasionalmente até dourar levemente (6 a 8 minutos).
                      Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na panela.
                      Adicione pimentão doce, folhas de louro, alho, tomates, cebola, sal e pimenta, e cozinhe mexendo com frequência
                      até engrossar e liberar aroma (cerca de 10 minutos). Adicione o caldo com açafrão e mais 4 1/2 xícaras de caldo de frango;
                      deixe ferver.
                    </Tipografia>

                    <Tipografia sx={{ marginBottom: 2 }}>
                      Adicione o arroz e mexa suavemente para distribuir. Cubra com alcachofras e pimentões, e cozinhe sem mexer até que
                      a maior parte do líquido tenha sido absorvida (15 a 18 minutos). Reduza o fogo para médio-baixo, adicione os camarões
                      reservados e os mexilhões, empurrando-os para dentro do arroz, e cozinhe novamente sem mexer até que os mexilhões
                      abram e o arroz esteja macio (mais 5 a 7 minutos). (Descarte qualquer mexilhão que não abrir.)
                    </Tipografia>

                    <Tipografia>
                      Retire do fogo e deixe descansar por 10 minutos antes de servir.
                    </Tipografia>
                  </ConteudoCartao>
                </Colapsar>
              </Cartao>

            </Grid>


            <Grid item xs={12} sm={6} 
              sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}
            >

              <Cartao  sx={{ width:'500px', backgroundColor: '#043873' }}>

                <CabecalhoCartao
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="receita">
                      R
                    </Avatar>
                  }
                  action={
                    <BotaoIcone aria-label="configurações">
                      <IconeMaisOpcoes />
                    </BotaoIcone>
                  }
                  title="Paella de Camarão com Chouriço"
                />



                <ImagemCartao
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Prato de paella"
                />


                <ConteudoCartao>

                  <Tipografia variant="body2" sx={{ color: '#fff' }}>
                    Esta paella impressionante é perfeita para festas e divertida de preparar
                    junto com seus convidados. Adicione 1 xícara de ervilhas congeladas com os mexilhões, se desejar.
                  </Tipografia>

                </ConteudoCartao>


                <AcoesCartao disableSpacing>

                  <BotaoIcone aria-label="adicionar aos favoritos">
                    <IconeFavorito />
                  </BotaoIcone>

                  <BotaoIcone aria-label="compartilhar">
                    <IconeCompartilhar />
                  </BotaoIcone>

                  <ExpandirMais
                    expandido={expandido}
                    onClick={aoClicarExpandir}
                    aria-expanded={expandido}
                    aria-label="mostrar mais"
                  >

                    <IconeExpandirMais />

                  </ExpandirMais>

                </AcoesCartao>


                <Colapsar in={expandido} timeout="auto" unmountOnExit>
                  
                  <ConteudoCartao>

                    <Tipografia sx={{ marginBottom: 2 }}>Modo de preparo:</Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça 1/2 xícara do caldo em uma panela até começar a ferver, adicione o açafrão e reserve por 10 minutos.
                    </Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça o óleo em uma paelleira (de 35 a 40 cm) ou em uma frigideira grande e funda em fogo médio-alto.
                      Adicione frango, camarão e chouriço, e cozinhe mexendo ocasionalmente até dourar levemente (6 a 8 minutos).
                      Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na panela.
                      Adicione pimentão doce, folhas de louro, alho, tomates, cebola, sal e pimenta, e cozinhe mexendo com frequência
                      até engrossar e liberar aroma (cerca de 10 minutos). Adicione o caldo com açafrão e mais 4 1/2 xícaras de caldo de frango;
                      deixe ferver.
                    </Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Adicione o arroz e mexa suavemente para distribuir. Cubra com alcachofras e pimentões, e cozinhe sem mexer até que
                      a maior parte do líquido tenha sido absorvida (15 a 18 minutos). Reduza o fogo para médio-baixo, adicione os camarões
                      reservados e os mexilhões, empurrando-os para dentro do arroz, e cozinhe novamente sem mexer até que os mexilhões
                      abram e o arroz esteja macio (mais 5 a 7 minutos). (Descarte qualquer mexilhão que não abrir.)
                    </Tipografia>
                    <Tipografia>
                      Retire do fogo e deixe descansar por 10 minutos antes de servir.
                    </Tipografia>
                  </ConteudoCartao>
                </Colapsar>
              </Cartao>

            </Grid>


            <Grid item xs={12} sm={6}
              sx={{ display: 'flex', justifyContent: 'center', mr: { xs: 0, sm: 40 } }}
            >

              <Cartao sx={{ width:'500px', backgroundColor: '#043873' }}>

          <CabecalhoCartao
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="receita">
                R
              </Avatar>
            }
            action={
              <BotaoIcone aria-label="configurações">
                <IconeMaisOpcoes />
              </BotaoIcone>
            }
            title="Paella de Camarão com Chouriço"
            subheader="14 de Setembro de 2016"
          />
          <ImagemCartao
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Prato de paella"
          />
          <ConteudoCartao>
            <Tipografia variant="body2" sx={{ color: 'text.secondary' }}>
              Esta paella impressionante é perfeita para festas e divertida de preparar
              junto com seus convidados. Adicione 1 xícara de ervilhas congeladas com os mexilhões, se desejar.
            </Tipografia>
          </ConteudoCartao>
          <AcoesCartao disableSpacing>
            <BotaoIcone aria-label="adicionar aos favoritos">
              <IconeFavorito />
            </BotaoIcone>
            <BotaoIcone aria-label="compartilhar">
              <IconeCompartilhar />
            </BotaoIcone>
            <ExpandirMais
              expandido={expandido}
              onClick={aoClicarExpandir}
              aria-expanded={expandido}
              aria-label="mostrar mais"
            >
              <IconeExpandirMais />
            </ExpandirMais>
          </AcoesCartao>
          <Colapsar in={expandido} timeout="auto" unmountOnExit>
            <ConteudoCartao>
              <Tipografia sx={{ marginBottom: 2 }}>Modo de preparo:</Tipografia>
              <Tipografia sx={{ marginBottom: 2 }}>
                Aqueça 1/2 xícara do caldo em uma panela até começar a ferver, adicione o açafrão e reserve por 10 minutos.
              </Tipografia>
              <Tipografia sx={{ marginBottom: 2 }}>
                Aqueça o óleo em uma paelleira (de 35 a 40 cm) ou em uma frigideira grande e funda em fogo médio-alto.
                Adicione frango, camarão e chouriço, e cozinhe mexendo ocasionalmente até dourar levemente (6 a 8 minutos).
                Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na panela.
                Adicione pimentão doce, folhas de louro, alho, tomates, cebola, sal e pimenta, e cozinhe mexendo com frequência
                até engrossar e liberar aroma (cerca de 10 minutos). Adicione o caldo com açafrão e mais 4 1/2 xícaras de caldo de frango;
                deixe ferver.
              </Tipografia>
              <Tipografia sx={{ marginBottom: 2 }}>
                Adicione o arroz e mexa suavemente para distribuir. Cubra com alcachofras e pimentões, e cozinhe sem mexer até que
                a maior parte do líquido tenha sido absorvida (15 a 18 minutos). Reduza o fogo para médio-baixo, adicione os camarões
                reservados e os mexilhões, empurrando-os para dentro do arroz, e cozinhe novamente sem mexer até que os mexilhões
                abram e o arroz esteja macio (mais 5 a 7 minutos). (Descarte qualquer mexilhão que não abrir.)
              </Tipografia>
              <Tipografia>
                Retire do fogo e deixe descansar por 10 minutos antes de servir.
              </Tipografia>
            </ConteudoCartao>
          </Colapsar>
              </Cartao>
              
            </Grid>


            <Grid item xs={12} sm={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >

              <Cartao sx={{ width:'500px', backgroundColor: '#043873' }}>

                <CabecalhoCartao
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="receita">
                      R
                    </Avatar>
                  }
                  action={
                    <BotaoIcone aria-label="configurações">
                      <IconeMaisOpcoes />
                    </BotaoIcone>
                  }
                  title="Paella de Camarão com Chouriço"
                  subheader="14 de Setembro de 2016"
                />
                <ImagemCartao
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Prato de paella"
                />
                <ConteudoCartao>
                  <Tipografia variant="body2" sx={{ color: 'text.secondary' }}>
                    Esta paella impressionante é perfeita para festas e divertida de preparar
                    junto com seus convidados. Adicione 1 xícara de ervilhas congeladas com os mexilhões, se desejar.
                  </Tipografia>
                </ConteudoCartao>
                <AcoesCartao disableSpacing>
                  <BotaoIcone aria-label="adicionar aos favoritos">
                    <IconeFavorito />
                  </BotaoIcone>
                  <BotaoIcone aria-label="compartilhar">
                    <IconeCompartilhar />
                  </BotaoIcone>
                  <ExpandirMais
                    expandido={expandido}
                    onClick={aoClicarExpandir}
                    aria-expanded={expandido}
                    aria-label="mostrar mais"
                  >
                    <IconeExpandirMais />
                  </ExpandirMais>
                </AcoesCartao>
                <Colapsar in={expandido} timeout="auto" unmountOnExit>
                  <ConteudoCartao>
                    <Tipografia sx={{ marginBottom: 2 }}>Modo de preparo:</Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça 1/2 xícara do caldo em uma panela até começar a ferver, adicione o açafrão e reserve por 10 minutos.
                    </Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Aqueça o óleo em uma paelleira (de 35 a 40 cm) ou em uma frigideira grande e funda em fogo médio-alto.
                      Adicione frango, camarão e chouriço, e cozinhe mexendo ocasionalmente até dourar levemente (6 a 8 minutos).
                      Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na panela.
                      Adicione pimentão doce, folhas de louro, alho, tomates, cebola, sal e pimenta, e cozinhe mexendo com frequência
                      até engrossar e liberar aroma (cerca de 10 minutos). Adicione o caldo com açafrão e mais 4 1/2 xícaras de caldo de frango;
                      deixe ferver.
                    </Tipografia>
                    <Tipografia sx={{ marginBottom: 2 }}>
                      Adicione o arroz e mexa suavemente para distribuir. Cubra com alcachofras e pimentões, e cozinhe sem mexer até que
                      a maior parte do líquido tenha sido absorvida (15 a 18 minutos). Reduza o fogo para médio-baixo, adicione os camarões
                      reservados e os mexilhões, empurrando-os para dentro do arroz, e cozinhe novamente sem mexer até que os mexilhões
                      abram e o arroz esteja macio (mais 5 a 7 minutos). (Descarte qualquer mexilhão que não abrir.)
                    </Tipografia>
                    <Tipografia>
                      Retire do fogo e deixe descansar por 10 minutos antes de servir.
                    </Tipografia>
                  </ConteudoCartao>
                </Colapsar>
              </Cartao>

            </Grid>


        </Grid>


    </Container>
  );
}
