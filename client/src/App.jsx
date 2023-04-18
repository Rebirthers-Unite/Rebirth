import { useState } from 'react'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/LandingPage/Hero/Hero'
import About from './components/LandingPage/About/About'
import Survivors from './components/LandingPage/Survivors/Survivors'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Survivors/>
   <Footer/>
   </div>
  )
}

export default App
