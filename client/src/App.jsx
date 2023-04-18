import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Programs } from './components/OurProgramsPage/Programs'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar/>
    <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<Programs/>} path='programs' />
    </Routes>
   <Footer/>
   </div>
)
}

export default App
