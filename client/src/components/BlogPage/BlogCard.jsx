import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export const BlogCard = () => {
  return (
    <div className='card me-5 mb-5 px-0 pt-0 shadow p-3' id='blog-card'>
      <img className='card-img-top' alt='' src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'/>
        <div className='card-body'>
            <h3 className='card-title'>
              <AiOutlineSearch/>
              Dawgy Dawg</h3>
            <p className='card-text'>He my Dawgy Dawg<a href=''>{'Read More >>'}</a></p>
        </div>
    </div>
  )
}
