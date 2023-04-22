import React, {useState} from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4' id='navbar'>
			<img src={logo} alt='logo' style={{width: '110px', marginTop: '50px'}}/>
			<ul className='hidden md:flex'>
				<NavLink to='/' className='p-4 hover:text-yellow-300 hover:font-bold'>
					{' '}
					Home{' '}
				</NavLink>
				<NavLink
					to='/aboutus'
					className='p-4 hover:text-yellow-300 hover:font-bold'>
					{' '}
					About{' '}
				</NavLink>
				<NavLink
					to='/blogs'
					className='p-4 hover:text-yellow-300 hover:font-bold'>
					Blogs
				</NavLink>
				<NavLink
					to='/programs'
					className='p-4 hover:text-yellow-300 hover:font-bold'>
					Programs
				</NavLink>
				<NavLink
					to='/support'
					className='p-4 hover:text-yellow-300 hover:font-bold'>
					{' '}
					Support{' '}
				</NavLink>
				<NavLink
					to='/contact'
					className='p-4 hover:text-yellow-300 hover:font-bold'>
					{' '}
					Contact{' '}
				</NavLink>
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
						<NavLink to='/'>Home </NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/aboutus'>About </NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/blogs'>Blogs</NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/programs'>Programs </NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/contact'>Contact </NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/support'>Support</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

