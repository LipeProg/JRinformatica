import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import Header from './Components/Header/Header'
import Apresentacao from './Components/Apresentacao/Apresentacao'
import Servicos from './Components/Servicos/Servicos.jsx'
import QuemSomos from './Components/Quemsou/Quemsou.jsx'
import theme from './theme.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>

      <Header />
      <Apresentacao />
      <Servicos /> 
      <QuemSomos />

    </ThemeProvider>

    </>
  )
}

export default App
