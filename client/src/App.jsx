import {ViewBlogPage} from './components/ViewBlogs/ViewBlogPage.jsx'
import { BlogPage } from './components/BlogPage/BlogPage.jsx';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<BlogPage />} path='blogs'/>
        <Route element={<ViewBlogPage/>} path='blog/id'/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
