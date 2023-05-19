import Navbar from './components/Navbar/Navbar';
import './index.css'
import {Routes, Route} from 'react-router-dom'
import {LandingPage} from './components/LandingPage/LandingPage'
import {AboutUs} from './components/AboutUs/AboutUs'
import {Support} from './components/Support/Support'
import Contact from './components/Contact/Contact'
import {BlogPage} from './components/BlogPage/BlogPage'
import {ViewBlogPage} from './components/ViewBlogs/ViewBlogPage.jsx'
import Footer from './components/Footer/Footer';
import { Program } from './components/OurProgramsPage/Program';

function App() {
  return (
    <div>
   <Navbar/>
    <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<Program/>} path='program/:id' />
        <Route element={<AboutUs/>} path='aboutus' />
        <Route element={<Support/>} path='support' />
        <Route element={<Contact/>} path='contact'/>
        <Route element={<BlogPage/>} path='blogs'/>
        <Route element={<ViewBlogPage/>} path='blog/:id'/>
    </Routes>
   <Footer/>
   </div>
)
}

export default App
 
