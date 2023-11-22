import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Mains from './component/Mains'
import Section from './Section'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Mains/>
     <Section/>
     <Footer/>
    </>
  )
}

export default App
