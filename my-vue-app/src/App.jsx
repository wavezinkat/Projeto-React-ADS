import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo nome="Leo Real Cria"/>
      <Titulo/>
      <Titulo/>
      <Titulo/>

    </>
  )
}

export default App
