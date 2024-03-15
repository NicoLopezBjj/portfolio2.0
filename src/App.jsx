import { useState } from 'react'

import './App.css'
import "./Components/Header/Header.css"
import { Header } from './Components/Header/Header'
import { SobreMi } from './Components/SobreMi/SobreMi'
import { Inicio } from './Components/Inicio/Inicio'
import { Proyectos } from './Components/Proyectos/Proyectos'
import { Contacto } from './Components/Contacto/Contacto'
import './Components/Dark/dark.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
    </>
  )
}

export default App
