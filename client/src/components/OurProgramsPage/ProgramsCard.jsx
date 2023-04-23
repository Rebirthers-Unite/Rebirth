import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import avatar from '../../assets/again.jpeg'

export const ProgramsCard = () => {

  const navigate = useNavigate()

  return (
    <div className='card row mb-5 px-0 shadow' id='card-div'>
        <img src={avatar} alt='card-image' className='col-2' id='card-image'/>
        <div className='col-10' id='card-content'>
          <h3 className='card-title mt-4 text-3xl font-serif'> Rebirth of a Queen Safe House </h3>
          <p className='card-text mb-3 font-sans' style={{width: '650px'}}>We run an operational safehouse that rescues survivors, teenage mothers and children 
          from all parts of the country and refugees who have been trafficked and end up facing sexual and gender-based violence. 
          Our commitment is to continue keeping the safehouse secure, safe and healing space for all to heal and thrive. </p>
        </div>
        <div>
         <button to='/donate' className='btn btn-warning' style={{width: '200px'}} onClick={() => navigate('/support')} id='program-donate-button'>Donate    <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}
