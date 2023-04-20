import React from 'react'
import './About.css'
import whoWeAre from '../../assets/who we are.JPG'
import teamWork from '../../assets/teamwork.JPG'
import study from '../../assets/study.JPG'

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

          <div className='row'>
            <div className='col-6'>
              <img src={whoWeAre} alt='who we are' id='our-story-image'/>
            </div>
            <div className='col-6 mt-5'>
              <p className='text-5xl font-serif'>Our Mission</p>
              <p className='mt-3 font-sans' id='mission-text'>To advocate and create safe spaces for survivors of sexual/ gender-based violence and human 
                trafficking among vulnerable groups in the community through sustainable rescues, shelters, 
                mentorship and empowerment. </p>
            </div> 
          </div>


          <div className='row'>
            <div className='col-6 mt-5' id='vision-div'>
              <p className='text-5xl font-serif' >Our Vision</p>
              <p className='mt-3 font-sans' id='vision-text'>A frontier organization in ending sexual/ gender-based violence and human trafficking in the community </p>
            </div> 
            <div className='col-6'>
              <img src={study} alt='who we are' id='our-vision-image'/>
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <img src={teamWork} alt='who we are' id='our-story-image'/>
            </div>
            <div className='col-6 mt-5'>
              <p className='text-5xl font-serif' >Our Values</p>
              <p className='mt-3 font-sans' id='values-text'>As a young team, we take pride in the values of our organization 
              that makes us who we are and the impact we intend to make in the community. </p>
              <ul className='list-disc' id='values-list'>
                <li>Authenticity</li>
                <li>Compassion</li>
                <li>Integrity</li>
                <li>Accountability</li>
                <li>Commitment</li>
                <li>Inclusivity</li>
              </ul>
            </div> 
          </div>          
        
    </div>
  )
}
