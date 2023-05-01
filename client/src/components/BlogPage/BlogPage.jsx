import React, {useEffect, useState} from 'react'
import { BlogCard } from './BlogCard'
import './BlogPage.css'

export const BlogPage = () => {

  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rebirth-ktaf.onrender.com/blogs')
    .then(response => response.json())
    .then(blogData => setBlogs(blogData))
  }, [])

  const blogData = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))

  const cards = blogData.map((blog) => {
    return(
      <BlogCard key={blog.id.$oid} id={blog.id.$oid} title={blog.title} content={blog.body} image={blog.image_url}/>
    )
  })

  return (
      <div id='blog-page'>

          <h1 className='text-5xl font-serif ' style={{textAlign: 'center', marginTop: '100px'}}>BLOGS</h1>

          <div id='search-bar'>
            <input type='text' className='form-control' placeholder={'Search for Blog'} onChange={(e) => setSearch(e.target.value)}/>
          </div>

          <div className='row mt-3' id='cards-div'>
            {cards}
          </div>
          
        </div>    
  )
}
