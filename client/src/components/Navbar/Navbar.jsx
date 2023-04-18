import React, {useState} from 'react';
import { FiUser } from 'react-icons/fi';// Import the FiUser icon from React Icons library
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import useNavbarStore from '../../store';

const Navbar = () => {
  return (
    <div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#ffcc3d] flex'> REBIRTH </h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> Home </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> About </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> Programs </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> Contact </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> Support </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> <FiUser size={20}/> </li>
      </ul>
    </div>
  )
}

export default Navbar;

