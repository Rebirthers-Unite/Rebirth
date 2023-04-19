import React from 'react'
import './About.css'
import whoWeAre from '../../assets/who we are.JPG'

export const AboutUs = () => {
  return (
    <div id='about-us-page'>
        <p className='text-5xl font-bold font-serif' id='our-story'>Our Story</p>

          <p className='font-sans' id='who-we-are-content'> 
            We are a community-based organization that champions for the empowerment of survivors of sexual /gender-based
            violence and human trafficking through healing, mentorship, education and empowerment. Founded in 2019, Rebirth of a Queen
            has been in a commitment to create a safe space for survivors and the vulnerable in the community to be the voices. 
            Our Target group has and still remains to be young women ,girls, teenage Mothers and survivors of sexual and gender-based violence.
          </p>

        <img src={whoWeAre} alt='who we are'/>
        
    </div>
  )
}
