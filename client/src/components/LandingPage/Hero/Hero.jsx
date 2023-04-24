import React from 'react';
import {useNavigate} from 'react-router-dom'
import './hero.css'
import  girl from '../../../assets/girl.jpg'

function Hero() {

	const navigate = useNavigate()

	return (
		<div className='text-yellow-300 bg-center bg-cover'>
			<img src={girl} alt='hero-bg-image' id='hero-image'/>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' id='hero-content'>
				<h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-serif'>
					REBIRTH OF A QUEEN
				</h1>
				<p className='uppercase p-2 font-serif'>
					Safeguarding the lives of Survivors of Sexual / Gender Based Violence
					and Human Trafficking
				</p>
				<div className='space-x-4'>
					<button id='donate-button' onClick={() => navigate('/support')}>
						Donate Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
