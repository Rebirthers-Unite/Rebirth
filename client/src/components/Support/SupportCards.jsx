import React from 'react'
import {FaSchool} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {HiSpeakerphone} from 'react-icons/hi'
import {BsHouseHeartFill} from 'react-icons/bs'

export const SupportCards = () => {
  return (
    <div className='row mt-5' id='support-cards' style={{textAlign: 'center'}}>

        <div className='card shadow support'>
            <FaSchool className='icon'/>
            <p>Educating the vulnerable</p>
        </div>

        <div className='card shadow support'>
            <GiTakeMyMoney className='icon'/>
            <p>To equip victims with skills that can help in job marketing</p>
        </div>

        <div className='card shadow support'>
            <HiSpeakerphone className='icon'/>
            <p>Mentorship to raise awareness on mental health</p>
        </div>

        <div className='card shadow support'>
            <BsHouseHeartFill className='icon'/>
            <p>Operational safehouse that rescues victims from all parts of the country </p>
        </div>

    </div>
  )
}
