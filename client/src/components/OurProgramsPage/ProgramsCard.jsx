import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const ProgramsCard = ({title, description, image}) => {

  const navigate = useNavigate()

  return (
    <div className='card row mb-5 px-0 shadow' id='card-div'>
        <img src={image} alt='card-image' className='col-2' id='card-image'/>
        <div className='col-10' id='card-content'>
          <h3 className='card-title mt-4 text-3xl font-serif'>{title}</h3>
          <p className='card-text mb-3 font-sans' style={{width: '650px'}}>{description}</p>
        </div>
        <div>
         <button to='/donate' className='btn btn-warning' style={{width: '200px'}} onClick={() => navigate('/support')} id='program-donate-button'>Donate    <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}
