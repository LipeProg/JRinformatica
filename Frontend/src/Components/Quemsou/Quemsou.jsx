// Importa o React e o hook useState para lidar com estado
import React, { useState } from 'react';

// Importa componentes do Material UI
import { Box, Typography, TextField, Button, Grid, Alert } from '@mui/material';

// Importa a biblioteca emailjs para envio de e-mails via frontend
import emailjs from 'emailjs-com';




// Componente principal da seção "Quem Somos"
export default function QuemSomos() {
  // Estado para armazenar o e-mail digitado pelo usuário
  const [email, setEmail] = useState('');

  // Estado para controlar se o e-mail foi enviado com sucesso
  const [enviado, setEnviado] = useState(false);

  // Estado para controlar mensagens de erro de validação ou envio
  const [erro, setErro] = useState('');

  // Função chamada ao enviar o formulário
  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita recarregar a página
    setErro(''); // Limpa erros anteriores

    // Regex simples para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return; // Sai da função se o e-mail for inválido
    }

    // Envio de e-mail usando o serviço EmailJS
    emailjs.send(
      'service_z0b91bd', // ID do serviço (configurado no EmailJS)
      'template_3g989ls', // ID do template (configurado no EmailJS)
      {
        user_email: email,        // E-mail informado pelo usuário
        name: 'Possível cliente', // Nome fictício
        message: 'é um teste de envio de email' // Mensagem opcional
      },
      '7FpaDuoeCjlJmprck' // Chave pública do EmailJS
    )
      .then(() => {
        setEnviado(true); 
        setEmail('');     
      })
      .catch((error) => {
        setErro('Erro ao enviar. Tente novamente mais tarde.');
        console.error('Erro no envio:', error); // Exibe o erro no console
      });
  };

  


  return (
    <Box
      id="quemsou" // âncora para navegação
      sx={{
        px: { xs: 2, md: 10 },   // padding horizontal responsivo
        py: { xs: 6, md: 10 },   // padding vertical responsivo
        backgroundColor: '#003366', // cor de fundo
        color: '#fff', // cor do texto
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          {/* Título da seção */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quem Somos
          </Typography>

          {/* Texto de apresentação */}
          <Typography variant="body1" sx={{ mb: 4 }}>
            Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras
            que transformam processos e otimizam resultados...
          </Typography>

          {/* Formulário de contato */}
          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Entre em contato conosco:
            </Typography>

            {/* Campo de entrada do e-mail */}
            <TextField
              label="Seu e-mail"
              variant="outlined"
              type="email"
              fullWidth
              required
              value={email} // valor controlado
              onChange={(e) => setEmail(e.target.value)} // atualiza o estado
              error={!!erro} // se houver erro, aplica estilo de erro
              helperText={erro} // exibe mensagem de erro
              sx={{
                mb: 3,
                input: { color: '#fff' }, // cor do texto digitado
                label: { color: '#fff' }, // cor do rótulo
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&:hover fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiFormHelperText-root': { color: '#fff' },
              }}
            />

            {/* Botão de envio */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#4da6ff',
                color: '#fff',
                textTransform: 'none', // não deixa o texto em caixa alta
                '&:hover': { backgroundColor: '#3399ff' },
              }}
              fullWidth
            >
              Enviar
            </Button>
          </Box>

          {/* Alerta de sucesso se o e-mail foi enviado */}
          {enviado && (
            <Alert
              severity="success" // tipo do alerta
              sx={{ mt: 3 }} // margem superior
              onClose={() => setEnviado(false)} // permite fechar o alerta
            >
              E-mail enviado com sucesso! Entraremos em contato em breve.
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
