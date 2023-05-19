import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { HiSpeakerphone } from 'react-icons/hi';
import { BsHouseHeartFill } from 'react-icons/bs';

export const SupportCards = () => {
	return (
		<div className='grid sm:grid-cols-1 justify-center md:gap-4 sm:gap-2 md:grid-cols-4 md:p-4 sm:p-8 sm:pt-1 sm:text-center'>
			<div className='card shadow text-black flex flex-col items-center sm:pt-2 md:pt-4 justify-center support '>
				<FaSchool className='icon sm:text-5xl mb-4' />
				<p className='text-center'>Educating the vulnerable</p>
			</div>

			<div className='card shadow text-black flex flex-col items-center sm:pt-2 md:pt-4 justify-center support '>
				<GiTakeMyMoney className='icon sm:text-5xl mb-4' />
				<p className='text-center'>
					To equip victims with skills that can help in job marketing
				</p>
			</div>

			<div className='card shadow text-black flex flex-col items-center sm:pt-2 md:pt-4 justify-center support '>
				<HiSpeakerphone className='icon text-5xl mb-4' />
				<p className='text-center'>
					Mentorship to raise awareness on mental health
				</p>
			</div>

			<div className='card shadow text-black flex flex-col items-center sm:pt-2 md:pt-4 justify-center support '>
				<BsHouseHeartFill className='icon text-5xl mb-4' />
				<p className='text-center'>
					Operational safehouse that rescues victims from all parts of the
					country{' '}
				</p>
			</div>
		</div>
	);
};
