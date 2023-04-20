import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Programs } from './components/OurProgramsPage/Programs'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'
import { Support } from './components/Support/Support'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar/>
    <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<Programs/>} path='programs' />
        <Route element={<AboutUs/>} path='aboutus' />
        <Route element={<Support/>} path='support' />
    </Routes>
   <Footer/>
   </div>
)
}

export default App
