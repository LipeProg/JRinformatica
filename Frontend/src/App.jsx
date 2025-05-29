import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Apresentacao from './Components/Apresentacao/Apresentacao'
import Servicos from './Components/Servicos/Servicos.jsx'
import QuemSomos from './Components/Quemsou/Quemsou.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Apresentacao />
      <Servicos /> 
      <QuemSomos />
    </>
  )
}

export default App
