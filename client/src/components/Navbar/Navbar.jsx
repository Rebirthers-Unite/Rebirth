import React, { useState } from 'react'; // Import the FiUser icon from React Icons library
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4'>
			<h1 className='w-full text-3xl font-bold text-[#ffcc3d] flex'>
				REBIRTH
			</h1>
			<ul className='hidden md:flex'>
				<li className='p-4 hover:text-yellow-300 hover:font-bold'> Home </li>
				<li className='p-4 hover:text-yellow-300 hover:font-bold'> About </li>
				<li className='p-4 hover:text-yellow-300 hover:font-bold'>
					Programs
				</li>
				<li className='p-4 hover:text-yellow-300 hover:font-bold'> Contact </li>
				<li className='p-4 hover:text-yellow-300 hover:font-bold'> Support </li>
			</ul>
			<div
				onClick={handleNav}
				className='block md:hidden hover:text-yellow-300 hover:font-bold'>
				{!nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
			</div>
			<div
				className={
					!nav
						? 'fixed left-0 top-0 w-[37%] md:hidden h-full border-r-gray-900 bg-gray-600 ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}>
				<ul className='p-12 uppercase'>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<Link to='/'>Home </Link>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<Link to='/about'>About </Link>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<Link to='/programs'>Programs </Link>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<Link to='/contact'>Contact </Link>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<Link to='/support'>Support</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
