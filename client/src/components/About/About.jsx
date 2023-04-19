import React from 'react'
import Logo from '../../assets/logo.png'
import { BsArrowRightCircle } from 'react-icons/bs'

function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Logo} alt="logo" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#824cc6] font-bold md:text-2xl sm:text-center sm:text-bold sm:text-xl'> ABOUT US </h1>
                <p className='md:text-xl sm:text-lg py-3'> Rebirth of a Queen is grassroot organization that was founded in the year 2019 with a goal to holistically empower and protect vulnerable groups from sexual and gender-based violence in Kenya. Rebirth of a Queen is a journey that was inspired by the founder Akinyi Juma who survived sexual and domestic violence as a teenager in Kibera slums Nairobi Kenya.</p>
                <div className="flex items-center justify-center">
                    <button className="relative bg-white w-[160px] font-bold my-4 pr-4 py-3 text-[#916aff] border-[#916aff] border rounded-3xl hover:scale-105 hover:bg-purple-200"> Learn More <BsArrowRightCircle size={20} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#916aff] hover:text-white"/> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About