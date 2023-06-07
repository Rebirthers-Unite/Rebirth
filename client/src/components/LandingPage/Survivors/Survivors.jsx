import React from 'react';
import survivor1 from '../../../assets/survivor1.HEIC';
import survivor2 from '../../../assets/survivor2.JPG';
import survivor3 from '../../../assets/survivor3.HEIC';

function Survivors() {
  return (
    <div className='w-full sm:pt-32 sm:mt-56 sm:pb-2 md:mt-2 md:pb-2 px-4 bg-[#9a9a9a]'>
      <div className='text-yellow-400 font-bold font-serif max-w-[800px] mt-[-22rem] mb-[-14rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-5xl sm:text-4xl text-4xl sm:pt-8 md:pb-2 md:py-6'>
          {' '}
          Hear from some of our Survivors{' '}
        </h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <div className='w-full sm:w-4/5 md:w-auto sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col pt-0 my-4 ml-2 rounded-lg duration-300'>
          <img className='h-30 w-30 rounded' src={survivor1} alt='Survivor 1' />
          <div className='bg-white p-3 rounded'>
            <p className='font-light text-l italic text-gray-800'>
              "Thanks to Rebirth of a queen i can now put food on the table for my family"
            </p>
            <p className='mt-1 font-semibold text-sm text-gray-900 p-4'>
              Roselyne Mwende
            </p>
          </div>
        </div>

        <div className='w-full sm:w-4/5 md:w-auto sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col pt-0 md:mt-4 my-4 ml-2 rounded-lg duration-300'>
          <img className='h-30 w-30 rounded' src={survivor2} alt='Survivor 2' />
          <div className='bg-white p-3 rounded'>
            <p className='font-light text-l italic text-gray-800'>
              "I was a victim of Gender Based Violence and Rebirth of a Queen took me in, clothed me and educated me."
            </p>
            <p className='mt-1 font-semibold text-sm text-gray-900 p-4'>
              Beatrice Atieno
            </p>
          </div>
        </div>

        <div className='w-full sm:w-4/5 md:w-auto sm:ml-20 md:ml-2 shadow-xl flex bg-white text-black flex-col pt-0 md:mt-4 my-4 ml-2 rounded-lg duration-300'>
          <img className='h-30 w-30 rounded' src={survivor3} alt='Survivor 3' />
          <div className='bg-white p-3 rounded-lg'>
            <p className='font-light text-l italic text-gray-800'>
              "Thanks to Rebirth of a Queen I can now work towards my dream of becoming a lawyer."
            </p>
            <p className='mt-0 font-semibold text-sm text-gray-900 p-3 ml-[-14px]'>
              Joan Wairimu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survivors;
