import React from 'react';
import './About.css'
import Logo from '../../../assets/teamwork.JPG';
import { useNavigate } from 'react-router-dom';

function About() {

	const navigate = useNavigate()

	return (
		<div className='w-full bg-white py-10 px-2' id='about-section'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img src={Logo} alt='logo' className='w-[500px] mx-auto my-4' />
				<div className='flex flex-col justify-center'>
					<h1 className='text-[#824cc6] font-bold md:text-4xl sm:text-center sm:text-bold sm:text-xl font-serif'>
						ABOUT US
					</h1>
					<p className='md:text-xl sm:text-lg py-3 font-sans' style={{color: 'black'}}>
						Rebirth of a Queen is grassroot organization that was founded in the
						year 2019 with a goal to holistically empower and protect vulnerable
						groups from sexual and gender-based violence in Kenya. Rebirth of a
						Queen is a journey that was inspired by the founder Akinyi Juma who
						survived sexual and domestic violence as a teenager in Kibera slums
						Nairobi Kenya.
					</p>
					<div className='flex items-center justify-center'>
						<button id='learn-more-button' onClick={() => {navigate('/aboutus')}}>
							Learn More   <i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
