import React from 'react';
import { useNavigate } from 'react-router-dom';
import girl from '../../../assets/girl.jpg';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='relative text-yellow-300 bg-center bg-cover'>
      <img
        src={girl}
        alt='hero-bg-image'
        className='sm:mt-[-96px] md:mb-[-10px] md:h-[900px] bg-cover filter brightness-80'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='max-w-[800px] px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl text-center py-6 font-serif'>
            REBIRTH OF A QUEEN
          </h1>
          <p className='text-lg sm:text-xl uppercase p-2 font-bold font-serif text-center'>
            Safeguarding the lives of Survivors of Sexual / Gender Based Violence
            and Human Trafficking
          </p>
          <div className='mt-4 flex justify-center'>
            <button
              className='w-40 font-serif font-bold h-12 text-black bg-[#916aff] hover:bg-purple-700 hover:text-white rounded'
              onClick={() => navigate('/support')}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
