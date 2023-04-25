import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const ProgramsCard = ({title, description, image}) => {

  const navigate = useNavigate()

  return (
    <div className='card me-5 mb-5 px-0 pt-0 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12 shadow'>
        <img src={image} alt='card-image' className='card-img-top'/>
        <div className='col-10'>
          <h3 className='card-title text-3xl text-center sm:pl-14 sm:pt-4 font-serif'>{title}</h3>
          <p className='card-text mb-3 sm:pl-14 text-center'>{description}</p>
        </div>
        <div>
         <button to='/donate' className='btn btn-warning sm:ml-32 sm:pl-4 md:ml-[170px] md:pl-6 md:pr-6 text-center' onClick={() => navigate('/support')}>Donate    <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}
