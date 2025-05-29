import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

export default function QuemSomos() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
    setErro('');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    // Enviar usando EmailJS
    emailjs.send(
      'service_z0b91bd',
      'template_3g989ls',
      {
        user_email: email,
        name: 'Possível cliente',
        message: 'é um teste de envio de email' // Mensagem opcional
      },
      '7FpaDuoeCjlJmprck'
    )
      .then(() => {
        setEnviado(true);
        setEmail('');
      })
      .catch((error) => {
        setErro('Erro ao enviar. Tente novamente mais tarde.');
        console.error('Erro no envio:', error);
      });
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: '#003366',
        color: '#fff',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quem Somos
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras
            que transformam processos e otimizam resultados...
          </Typography>

          <Box component="form" onSubmit={enviarFormulario} noValidate>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Entre em contato conosco:
            </Typography>

            <TextField
              label="Seu e-mail"
              variant="outlined"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!erro}
              helperText={erro}
              sx={{
                mb: 3,
                input: { color: '#fff' },
                label: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&:hover fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
                '& .MuiFormHelperText-root': { color: '#fff' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#4da6ff',
                color: '#fff',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#3399ff' },
              }}
              fullWidth
            >
              Enviar
            </Button>
          </Box>

          {enviado && (
            <Alert
              severity="success"
              sx={{ mt: 3 }}
              onClose={() => setEnviado(false)}
            >
              E-mail enviado com sucesso! Entraremos em contato em breve.
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
