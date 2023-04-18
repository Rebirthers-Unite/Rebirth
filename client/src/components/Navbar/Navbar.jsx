import React, {useState} from 'react';
import { FiUser } from 'react-icons/fi';// Import the FiUser icon from React Icons Linkbrary
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#ffcc3d] flex'> REBIRTH </h1>
      <ul className='hidden md:flex'>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold' to='/'> Home </Link>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold'> About </Link>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold' to='/programs'> Programs </Link>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold'> Contact </Link>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold'> Support </Link>
        <Link className='p-4 hover:text-yellow-300 hover:font-bold'> <FiUser size={20}/> </Link>
      </ul>
    </div>
  )
}

export default Navbar;

