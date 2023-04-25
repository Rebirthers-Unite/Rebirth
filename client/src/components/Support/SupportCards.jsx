import React from 'react'
import {FaSchool} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {HiSpeakerphone} from 'react-icons/hi'
import {BsHouseHeartFill} from 'react-icons/bs'

export const SupportCards = () => {
  return (
		<div className='grid sm:grid-cols-1 align-center justify-center me-5 mb-5 px-0 md:grid-cols-4 pt-0 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12'>
			<div className='card shadow text-black grid sm:grid-cols-1 sm:justify-center support me-5 mb-5 md:pb-8 md:pt-4 px-0 pt-60 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12'>
				<FaSchool className='icon' />
				<p>Educating the vulnerable</p>
			</div>

			<div className='card shadow text-black grid sm:grid-cols-1 sm:justify-center support me-5 mb-5 md:pb-8 md:pt-4 px-0 pt-60 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12'>
				<GiTakeMyMoney className='icon' />
				<p>To equip victims with skills that can help in job marketing</p>
			</div>

			<div className='card shadow text-black grid sm:grid-cols-1 sm:justify-center support me-5 mb-5 md:pb-8 md:pt-4 px-0 pt-60 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12'>
				<HiSpeakerphone className='icon' />
				<p>Mentorship to raise awareness on mental health</p>
			</div>

			<div className='card shadow text-black grid sm:grid-cols-1 sm:justify-center support me-5 mb-5 md:pb-8 md:pt-4 px-0 pt-60 p-4 md:ml-8 sm:ml-[-60px] sm:pl-12'>
				<BsHouseHeartFill className='icon' />
				<p>
					Operational safehouse that rescues victims from all parts of the
					country{' '}
				</p>
			</div>
		</div>
	);
}
