import React from 'react'
import './About.css'
// import whoWeAre from '../../assets/who we are.JPG'

export const AboutUs = () => {
  return (
    <div id='about-us-page'>
        <h1 className='text-3xl font-bold font-serif' id='title'>Who We Are</h1>

        <div id='who-we-are' className='row'>
          <p className='font-sans'> 
            We are a community-based organization that champions for the empowerment of survivors of sexual /gender-based
            violence and human trafficking through healing, mentorship, education and empowerment.<br></br> Founded in 2019, Rebirth of a Queen
            has been in a commitment to create a safe space for survivors and the vulnerable in the community to be the voices.<br></br> 
            Our Target group has and still remains to be young women ,girls, teenage Mothers and survivors of sexual and gender-based violence
          </p>
          {/* <img src={whoWeAre} alt='who we are'/> */}
        </div>

        <div>
          
        </div>
        
    </div>
  )
}
