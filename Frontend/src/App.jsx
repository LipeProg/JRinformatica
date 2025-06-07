// Importa o hook useState do React para gerenciar estado dentro do componente
import { useState } from 'react';

// Importa a logo do React e a logo do Vite (usadas geralmente na tela inicial ou para teste)
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Importa o ThemeProvider do Material UI para aplicar temas personalizados
import { ThemeProvider } from '@mui/material/styles';

// Importa o CSS global do aplicativo
import './App.css';

// Importa os componentes usados na aplicação
import Header from './Components/Header/Header';
import Apresentacao from './Components/Apresentacao/Apresentacao';
import Servicos from './Components/Servicos/Servicos.jsx';
import QuemSomos from './Components/Quemsou/Quemsou.jsx';

// Importa o tema personalizado definido em `theme.js`
import theme from './theme.js';

// Função principal do componente App
function App() {
  // Estado exemplo chamado 'count', com valor inicial 0 (não está sendo usado ativamente)
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Aplica o tema personalizado a todos os componentes filhos usando o ThemeProvider do Material UI */}
      <ThemeProvider theme={theme}>

        <Header />
        
        <Apresentacao />
        
        <Servicos />
        
        <QuemSomos />
      </ThemeProvider>
    </>
  );
}

// Exporta o componente App para que ele possa ser usado no index.js ou main.jsx
export default App;
