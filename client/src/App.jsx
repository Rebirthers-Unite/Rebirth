import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Survivors from './components/Survivors/Survivors';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
   <Navbar/>
    <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<Programs/>} path='programs' />
        <Route element={<AboutUs/>} path='aboutus' />
        <Route element={<Support/>} path='support' />
        <Route element={<Contact/>} path='contact'/>
        <Route element={<BlogPage />} path='blogs'/>
        <Route element={<ViewBlogPage/>} path='blog/id'/>
    </Routes>
   <Footer/>
   </div>
)
}

export default App
