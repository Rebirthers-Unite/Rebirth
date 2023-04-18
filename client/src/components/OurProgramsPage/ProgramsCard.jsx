import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../../assets/face.jpeg'

export const ProgramsCard = () => {
  return (
    <div className='card row mb-5 px-0' id='card-div'>
        <img src={avatar} alt='card-image' className='col-2' id='card-image'/>
        <div className='col-10' id='card-content'>
          <h3 className='card-title mt-4'> Rebirth of a Queen Safe House </h3>
          <p className='card-text mb-3' style={{width: '650px'}}>We run an operational safehouse that rescues survivors, teenage mothers and children 
          from all parts of the country and refugees who have been trafficked and end up facing sexual and gender-based violence. 
          Our commitment is to continue keeping the safehouse secure, safe and healing space for all to heal and thrive. </p>
        </div>
        <div>
         <Link to='/donate' className='btn btn-warning' style={{width: '200px'}}>Donate</Link>
        </div>
    </div>
  )
}
