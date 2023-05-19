import React from 'react';
import { useNavigate } from 'react-router-dom';
import girl from '../../../assets/girl.jpg';

function Hero() {
	const navigate = useNavigate();

	return (
		<div className='text-yellow-300 bg-center bg-cover'>
			<img
				src={girl}
				alt='hero-bg-image'
				className='sm:mt-[-96px] md:mb-[-10px] md:h-[900px] filter brightness-80'
			/>
			<div
				className='max-w-[800px] sm:mt-[-160px] w-full h-screen mx-auto text-center flex flex-col justify-center absolute sm:top-1/4 md:top-60 sm:left-1/10 md:left-60'>
				<h1 className='md:text-7xl sm:text-6xl md:py-6 font-serif'>
					REBIRTH OF A QUEEN
				</h1>
				<p className='uppercase p-2 font-bold font-serif'>
					Safeguarding the lives of Survivors of Sexual / Gender Based Violence
					and Human Trafficking
				</p>
				<div className='mt-4'>
					<button
						className='w-40 font-serif font-bold h-12 text-black bg-[#916aff] hover:bg-purple-700 hover:text-white rounded transform -translate-x-0 -translate-y-0 relative z-10'
						onClick={() => navigate('/support')}>
						Donate Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
