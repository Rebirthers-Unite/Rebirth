import { useState } from 'react'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { LandingPage } from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar/>
   <Routes>
      <Route element={<LandingPage/>} path='/' />
   </Routes>
   <Footer/>
   </div>
  )
}

export default App
