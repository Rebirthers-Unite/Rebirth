import React from 'react'
import { BlogCard } from './BlogCard'
import './BlogPage.css'

export const BlogPage = () => {
  return (
      <div id='blog-page'>

          <h1 className='text-5xl font-serif ' style={{textAlign: 'center', marginTop: '100px'}}>BLOGS</h1>

          <div id='search-bar'>
            <input type='text' className='form-control' placeholder={'Search for Blog'} />
          </div>

          <div className='row mt-3' id='cards-div'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          
        </div>    
  )
}
