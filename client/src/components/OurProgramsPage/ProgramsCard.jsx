import React from 'react'
import avatar from '../../assets/face.jpeg'

export const ProgramsCard = () => {
  return (
    <div className='card w-100'>
        <img src={avatar} alt='card-image' className='card-img-top'/>
        <div className='card-body'>
          <h3 className='card-title'>Rebirth of a Queen Safe House</h3>
          <p className='card-text'>We run an operational safehouse that rescues survivors, teenage mothers and children 
          from all parts of the country and refugees who have been trafficked and end up facing sexual and gender-based violence. 
          Our commitment is to continue keeping the safehouse secure, safe and healing space for all to heal and thrive. </p>
        </div>
    </div>
  )
}
