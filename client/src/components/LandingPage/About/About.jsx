import React from 'react';
import Logo from '../../../assets/teamwork.JPG';
import { useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowRight);

function About() {
	const navigate = useNavigate();

	return (
		<div className='w-full bg-white sm:pt-10 md:mb-4 sm:mb-[-160px] md:pr-4 sm:pl-2'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img src={Logo} alt='logo' className='w-[550px] mx-auto mb-5' />
				<div className='flex flex-col font-serif justify-center md:mt-[-50px]'>
					<h1 className='text-[#824cc6] font-bold md:text-4xl sm:text-center sm:text-bold sm:text-3xl font-serif'>
						ABOUT US
					</h1>
					<p
						className='md:text-xl sm:text-lg py-3 font-serif'
						style={{ color: 'black' }}>
						Rebirth of a Queen is grassroot organization that was founded in the
						year 2019 with a goal to holistically empower and protect vulnerable
						groups from sexual and gender-based violence in Kenya. Rebirth of a
						Queen is a journey that was inspired by the founder Akinyi Juma who
						survived sexual and domestic violence as a teenager in Kibera slums
						Nairobi Kenya.
					</p>
					<div className='flex items-center justify-center'>
						<button
							onClick={() => {
								navigate('/aboutus');
							}}
							className='w-40 h-12 text-white hover:text-bold hover:bg-purple-700 border-[#916aff] bg-[#916aff] rounded transform translate-x-0 translate-y-0 relative z-0'
							style={{ transition: 'all .35s' }}>
							Learn More <FontAwesomeIcon icon='arrow-right' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
