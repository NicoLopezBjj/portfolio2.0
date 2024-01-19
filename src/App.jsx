import { useState } from 'react'

import './App.css'
import "./Components/Header/Header.css"
import { Header } from './Components/Header/Header'
import { SectionDos } from './Components/SectionDos/SectionDos'
import { Inicio } from './Components/Inicio/Inicio'
import { SectionCuatro } from './Components/SectionCuatro/SectionCuatro'
import { SectionSeis } from './Components/SectionSeis/SectionSeis'
import { SectionSiete } from './Components/SectionSiete/SectionSiete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio/>
      <SectionDos/>
      <SectionCuatro/>
      <SectionSeis/>
      <SectionSiete/>
    </>
  )
}

export default App
