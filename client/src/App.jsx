import {ViewBlogPage} from './components/ViewBlogs/ViewBlogPage.jsx'
import { BlogPage } from './components/BlogPage/BlogPage.jsx';
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route element={<BlogPage />} path='blogs'/>
      <Route element={<ViewBlogPage/>} path='blogs/:id'/>
    </Routes>
  )
}

export default App;
