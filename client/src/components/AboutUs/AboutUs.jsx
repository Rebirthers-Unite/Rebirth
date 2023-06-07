import React from 'react';
import whoWeAre from '../../assets/who we are.JPG';
import teamWork from '../../assets/teamwork.JPG';
import study from '../../assets/study.JPG';

export const AboutUs = () => {
  return (
    <div className='bg-purple-300 mt-[-100px] font-serif p-20 text-black'>
      <div className='sm:pt-18 sm:pb-8 md:pt-20 justify-center text-center'>
        <p className='sm:text-4xl md:text-6xl'>About Us</p>

        <p className='sm:pt-2 md:text-xl md:pl-20 md:pr-28 md:border-none sm:border-b sm:border-gray-900 sm:pb-8 sm:text-xl'>
          We are a community-based organization that champions for the
          empowerment of survivors of sexual/gender-based violence and human
          trafficking through healing, mentorship, education, and empowerment.
          Founded in 2019, Rebirth of a Queen has been in a commitment to create
          a safe space for survivors and the vulnerable in the community to be
          the voices. Our Target group has and still remains to be young women,
          girls, teenage Mothers and survivors of sexual and gender-based
          violence.
        </p>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8'>
        <div>
          <img src={whoWeAre} alt='who we are' className='w-full' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='md:text-6xl sm:text-4xl text-center font-serif'>
            Our Mission
          </p>
          <p className='mt-3 font-serif md:border-none sm:border-b sm:border-gray-900 sm:pb-8 sm:text-xl text-center'>
            To advocate and create safe spaces for survivors of sexual/gender-based
            violence and human trafficking among vulnerable groups in the community
            through sustainable rescues, shelters, mentorship, and empowerment.{' '}
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-16'>
        <div className='flex flex-col justify-center'>
          <p className='sm:text-5xl md:text-6xl text-center font-serif'>
            Our Vision
          </p>
          <p className='mt-3 text-center sm:text-xl font-serif'>
            A frontier organization in ending sexual/gender-based violence and
            human trafficking in the community{' '}
          </p>
        </div>
        <div className='sm:border-b sm:border-gray-900 sm:pb-8 md:border-none'>
          <img src={study} alt='who we are' className='w-full' />
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-16'>
        <div>
          <img src={teamWork} alt='who we are' className='w-full' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='sm:text-5xl md:text-6xl text-center font-serif'>
            Our Values
          </p>
          <p className='mt-3  sm:text-xl font-serif'>
            As a young team, we take pride in the values of our organization
            that makes us who we are and the impact we intend to make in the
            community.{' '}
          </p>
          <ul className='list-disc sm:text-xl sm:pl-4'>
            <li>Authenticity</li>
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Accountability</li>
            <li>Commitment</li>
            <li>Inclusivity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
