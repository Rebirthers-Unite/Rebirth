import React from 'react';
import Face from '../../../assets/again.jpeg'
import {GoQuote }from 'react-icons/go'

function Survivors() {
	return (
		<div className='w-full sm:pt-[8rem] sm:pb-[-12rem] md:pb-2 px-4 bg-[#9a9a9a]'>
			<div className='text-yellow-400 font-bold max-w-[800px] mt-[-24rem] mb-[-12rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<h1 className='md:text-5xl sm:text-4xl text-4xl sm:pt-8 md:pb-2 md:py-6'>
					{' '}
					Hear from some of our Survivors{' '}
				</h1>
			</div>
			<div
				className='max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 md:mt-4 my-4 ml-2 rounded-lg duration-300'>
						<img className='w-30 mx-auto mt-[1rem] bg-white' src={Face} />
							<p className='font-light text-l italic font-gray-800'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</p>
							<p className='mt-1 font-semibold text-sm text-gray-900 p-4'>
								US transport
							</p>
					</div>

					<div className='md:w-full sm:w-4/5 sm:mt-8 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 sm:py-56 md:mt-2 my-4 ml-2 rounded-lg  duration-300'>
						<img className='w-30 mx-auto mt-[1rem] bg-white' src={Face} />
						
							<p className='font-light text-l italic font-gray-800'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</p>
							<p className='mt-1 font-semibold text-sm text-gray-900 p-4'>
								US transport
							</p>
						</div>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 sm:mt-56 md:mt-2 my-4 ml-2 rounded-lg duration-300'>
						<img className='w-30 mx-auto mt-[1rem] bg-white' src={Face} />
						<p className="font-light text-l italic font-gray-800">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">
							US transport
							</p>
					</div>
				</div>
			</div>
	);
}

export default Survivors;
