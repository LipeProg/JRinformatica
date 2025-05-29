import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // Títulos com Lora
    h1: { fontFamily: 'Lora, serif' },
    h2: { fontFamily: 'Lora, serif' },
    h3: { fontFamily: 'Lora, serif' },
    h4: { fontFamily: 'Lora, serif' },
    h5: { fontFamily: 'Lora, serif' },
    h6: { fontFamily: 'Lora, serif' },
    
    // Textos normais com Roboto
    body1: { fontFamily: 'Roboto, sans-serif', fontSize: '1rem' },
    body2: { fontFamily: 'Roboto, sans-serif', fontSize: '0.875rem' },
  },
});

export default theme;