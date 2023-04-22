import React from 'react';
import Face from '../../../assets/again.jpeg'
import { BsArrowRightCircle } from 'react-icons/bs';

function Survivors() {
	return (
		<div className='w-full sm:py-[8rem] sm:pb-[2rem] md:pb-[2rem] md:py-[8rem] px-4 bg-[#9a9a9a]'>
			<div className='text-yellow-400 font-bold max-w-[800px] mt-[-24rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<h1 className='md:text-5xl sm:text-4xl text-4xl sm:pt-8 md:pt-14 md:py-6'>
					{' '}
					Meet some of our Survivors{' '}
				</h1>
			</div>
			<div className='max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-8'>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 md:mt-2 my-4 ml-2 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-30 mx-auto mt-[-15rem] bg-white'
						src={Face}
						alt='/'
					/>
					<h2 className='text-2xl font-bold text-center py-8'> Jane Doe </h2>
					<p className='text-center text-xl font-medium '>
						This is Jane Doe, 20 years old.
					</p>
					<div className='text-xl text-center font-medium'>
						<p className='py-2 border-b mx-8'>
							{' '}
							She is has been in our care and protection since she was 5 years{' '}
						</p>
					</div>
				</div>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 sm:mt-56 md:mt-2 my-4 ml-2 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-30 mx-auto mt-[-15rem] bg-white'
						src={Face}
						alt='/'
					/>
					<h2 className='text-2xl font-bold text-center py-8'> Jane Doe </h2>
					<p className='text-center text-xl font-medium '>
						This is Jane Doe, 20 years old.
					</p>
					<div className='text-xl text-center font-medium'>
						<p className='py-2 border-b mx-8'>
							{' '}
							She is has been in our care and protection since she was 5 years{' '}
						</p>
					</div>
				</div>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 sm:mt-56 md:mt-2 my-4 ml-2 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-30 mx-auto mt-[-15rem] bg-white'
						src={Face}
						alt='/'
					/>
					<h2 className='text-2xl font-bold text-center py-8'> Jane Doe </h2>
					<p className='text-center text-xl font-medium '>
						This is Jane Doe, 20 years old.
					</p>
					<div className='text-xl text-center font-medium'>
						<p className='py-2 border-b mx-8'>
							{' '}
							She is has been in our care and protection since she was 5 years{' '}
						</p>
					</div>
				</div>
				<div className='md:w-full sm:w-4/5 sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col p-4 sm:mt-56 md:mt-2 my-4 ml-2 rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-30 mx-auto mt-[-15rem] bg-white'
						src={Face}
						alt='/'
					/>
					<h2 className='text-2xl font-bold text-center py-8'> Jane Doe </h2>
					<p className='text-center text-xl font-medium '>
						This is Jane Doe, 20 years old.
					</p>
					<div className='text-xl text-center font-medium'>
						<p className='py-2 border-b mx-8'>
							{' '}
							She is has been in our care and protection since she was 5 years{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Survivors;
