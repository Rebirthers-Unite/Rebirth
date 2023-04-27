import React from 'react';
import { SupportCards } from './SupportCards';
import happy from '../../assets/again.jpeg';

export const Support = () => {
	return (
		<div id='support-page' className='bg-purple-200 sm:m-0 md:m-0 pb-[100px]'>
			<img
				src={
					'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'
				}
				alt=''
				id='donate-image'
				className='w-full h-auto -mt-96 -mb-12'
			/>
			<h1
				id='title'
				className='text-7xl font-serif text-white absolute top-32 left-1/2 transform -translate-x-1/2'>
				Donate
			</h1>
			<h1 className='text-3xl pb-4 pt-4 font-serif mt-24 text-center text-black'>
				Your donation will support...
			</h1>
			<SupportCards/>
			<h1 className='text-5xl font-serif mt-4 text-center text-black'>
				You can donate through
			</h1>

			<div className='grid sm:grid-cols-1 sm:justify-center sm:align-center md:grid-cols-3 text-center md:py-8 md:pr-4 sm:pl-52'>
				<div className='col-4'>
					<a href='https://gofund.me/bc18e7b5'>
						<img
							src='https://p.kindpng.com/picc/s/151-1514121_go-fund-me-hd-png-download.png'
							alt='gofundme logo'
							id='gofundme-logo'
							className='hover:scale-105 sm:w-40 sm:h-30 md:h-30 md:h-40 md:pb-6 md:w-72 sm:mt-4 sm:align-center'
						/>
					</a>
				</div>

				<div className='col-2'>
					<p id='or-text' className='text-3xl font-serif pl-16'>
						or
					</p>
				</div>

				<div className='col-6'>
					<a href='https://www.mchanga.africa/fundraiser/44234'>
						<img
							src={
								'https://tadamon.community/uploads/images/mchanga_logo_1574fa55-a36a-4b2e-b4b5-c317c5b1cff6.png?v=63819070917'
							}
							alt='mchanga'
							id='mchanga-logo'
							className='hover:scale-105 w-40'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

