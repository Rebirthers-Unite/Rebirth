import React from 'react';
import './Survivor.css'
import Face from '../../../assets/again.jpeg'
import {GoQuote }from 'react-icons/go'

function Survivors() {
	return (
		<div className='sm:py-[8rem] sm:pb-[2rem] md:pb-[2rem] md:py-[8rem] px-4 bg-[#9a9a9a]'>
			<div className='text-yellow-400 font-serif font-bold max-w-[800px] mt-[-24rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<h1 className='md:text-5xl sm:text-4xl text-4xl sm:pt-8 md:pt-14 md:py-6'>
					{' '}
					Hear from some of our Survivors{' '}
				</h1>
			</div>
			<div className='row' id='cards-row'>

			<div className="max-w-sm h-100 me-4">
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={Face} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">US transport</p>
					</div>
				</div>
			</div>

			<div className="max-w-sm h-100 me-4">
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={Face} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">US transport</p>
					</div>
				</div>
			</div>

			<div className="max-w-sm h-100 me-4">
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={Face} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">US transport</p>
					</div>
				</div>
			</div>

			</div>
		</div>
	);
}

export default Survivors;
