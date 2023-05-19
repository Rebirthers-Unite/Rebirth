import React from 'react';
import './Survivor.css'
import survivor1 from '../../../assets/survivor1.HEIC'
import survivor2 from '../../../assets/survivor2.JPG'
import survivor3 from '../../../assets/survivor3.HEIC'

function Survivors() {
	return (
		<div className='sm:py-[8rem] sm:pb-[2rem] md:pb-[2rem] md:py-[8rem] px-4 bg-[#9a9a9a]' id='survivor-section'>
			<div className='text-yellow-400 font-serif font-bold max-w-[800px] mt-[-24rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<h1 className='md:text-5xl sm:text-4xl text-4xl sm:pt-8 md:pt-14 md:py-6' id='survivor-title'>
					{' '}
					Hear from some of our Survivors{' '}
				</h1>
			</div>
		  <div className='row' id='cards-row'>

			<div className="col-4 h-100 mb-3 " id='card'>
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={survivor1} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							"Thanks to Rebirth of a queen i can now put food on the table for my family"
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">Roselyne Mwende</p>
					</div>
				</div>
			</div>

			<div className="col-4 mb-3 h-100" id='card'>
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={survivor2} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							"I was a victim of Gender Based Violence and Rebirth of a Queen took me in, clothed me and educated me."
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">Beatrice Atieno</p>
					</div>
				</div>
			</div>

			<div className="col-4 mb-3 h-100" id='card'>
				<div className="shadow-lg rounded overflow-hidden">
					<img className="h-30 w-30" src={survivor3} />
					<div className="bg-white p-3">
						<p className="font-light text-l italic font-gray-800">
							"Thanks to Rebirth of a Queen I can now work towards my dream of becoming a lawyer."
						</p>
						<p className="mt-1 font-semibold text-sm text-gray-900 p-4">Joan Wairimu</p>
					</div>
				</div>
			</div>

			</div>
		</div>
	);
}

export default Survivors;
