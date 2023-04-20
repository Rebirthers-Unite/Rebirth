import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {ViewBlogPage} from './components/ViewBlogs/ViewBlogPage.jsx'
import { BlogPage } from './components/BlogPage/BlogPage.jsx';
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
        <Route element={<BlogPage />} path='blogs'/>
        <Route element={<ViewBlogPage/>} path='blog/id'/>
    </Routes>
   <Footer/>
   </div>
)
}

export default App
