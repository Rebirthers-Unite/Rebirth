import React from 'react';
import { SupportCards } from './SupportCards';
import happy from '../../assets/again.jpeg';

export const Support = () => {
	return (
		<div id='support-page' className='bg-purple-400 sm:m-0 md:m-0 pb-[100px]'>
			<img
				src={
					'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'
				}
				alt=''
				id='donate-image'
				className='w-full md:h-[760px] -mt-96'
			/>
			<h1
				id='title'
				className='text-7xl font-serif text-white absolute sm:pl-2 md:pl-0 sm:top-32 md:top-48 left-1/2 transform -translate-x-1/2'>
				Donate
			</h1>

			<h1 className='text-5xl font-serif mt-4 text-center pt-4 text-black'>
				You can donate through
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center text-center py-8 md:pr-12 sm:pr-8 md:pl-12 sm:pl-4'>
				<div>
					<a href='https://gofund.me/bc18e7b5'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd-1DnXVof5yLmoxA0zFTOPSsW0-oMKZUDg&usqp=CAU'
							alt='gofundme logo'
							id='gofundme-logo'
							className='hover:scale-105 w-35 h-30 md:h-40 md:w-60 mx-auto mt-4'
						/>
					</a>
				</div>
				<div>
					<p id='or-text' className='text-3xl font-serif'>
						or
					</p>
				</div>

				<div>
					<a href='https://www.mchanga.africa/fundraiser/44234'>
						<img
							src={
								'https://tadamon.community/uploads/images/mchanga_logo_1574fa55-a36a-4b2e-b4b5-c317c5b1cff6.png?v=63819070917'
							}
							alt='mchanga'
							id='mchanga-logo'
							className='hover:scale-105 w-40 md:w-60 mx-auto'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
