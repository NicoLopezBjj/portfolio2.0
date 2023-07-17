import { useState } from 'react'

import './App.css'
import "./Components/Header/Header.css"
import { Header } from './Components/Header/Header'
import { SectionDos } from './Components/SectionDos/SectionDos'
import { Inicio } from './Components/Inicio/Inicio'
import { SectionTres } from './Components/SectionTres/SectionTres'
import { SectionCuatro } from './Components/SectionCuatro/SectionCuatro'
import { SectionQuinta } from './Components/SectionQuinta/SectionQuinta'
import { SectionSeis } from './Components/SectionSeis/SectionSeis'
import { SectionSiete } from './Components/SectionSiete/SectionSiete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio/>
      <SectionDos/>
      <SectionTres/>
      <SectionCuatro/>
      <SectionQuinta/>
      <SectionSeis/>
      <SectionSiete/>
    </>
  )
}

export default App
