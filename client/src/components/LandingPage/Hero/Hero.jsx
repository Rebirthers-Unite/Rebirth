import React from 'react';
import './hero.css'
import  girl from '../../../assets/girl.jpg'

function Hero() {
	return (
		<div className='text-yellow-300 bg-center bg-cover hover:font-bold'>
			<img src={girl} alt='hero-bg-image' id='hero-image'/>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' id='hero-content'>
				<h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>
					REBIRTH OF A QUEEN
				</h1>
				<p className='uppercase p-2'>
					Safeguarding the lives of Survivors of Sexual / Gender Based Violence
					and Human Trafficking
				</p>
				<div className='space-x-4'>
					<button className='bg-[#916aff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#824cc6]'>
						Donate Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
