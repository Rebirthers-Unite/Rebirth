import {ViewBlogPage} from './components/ViewBlogs/ViewBlogPage.jsx'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<ViewBlogPage/>} />
    </Routes>
  )
}

export default App
