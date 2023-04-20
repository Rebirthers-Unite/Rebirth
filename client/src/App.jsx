import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { LandingPage } from './components/LandingPage/LandingPage'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar/>
    <Routes>
        <Route element={<LandingPage/>} path='/' />
		<Route element={<Contact/>} path='contact'/>
    </Routes>
   <Footer/>
   </div>
)
}

export default App
