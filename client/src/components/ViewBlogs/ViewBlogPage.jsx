import React, {useEffect, useState} from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import './ViewBlog.css'
import {useParams}from 'react-router-dom'

export const ViewBlogPage = () => {

  const {id} = useParams()
  const [blog, setBlog] = useState({})
  
  useEffect(() => {
      fetch(`https://rebirth-ktaf.onrender.com/blogs/${id}`)
      .then(response => response.json())
      .then(blogData => setBlog(blogData))
  },[])

  return (
    <div id='blog-page'>
      
        <h1 className='mb-4 text-5xl font-bold font-serif' style={{textAlign: 'center', marginTop:'100px'}}>{blog.title}</h1>

        <img id='blog-image' src={blog.image_url} alt='blog-image'/>

        <div className='row mt-5' id='blog-data'>
          <img className='col-1' src={'https://www.w3schools.com/howto/img_avatar.png'} id='admin-photo'/>
          <p className='col-3' style={{textAlign: 'left'}}>{blog.author}<br></br>{blog.date}. 4 min read</p>
          <div className='col-8 row'>
          </div>
        </div>

        <p id='blog-content'>{blog.body}</p>
          
    </div>
  )
}
