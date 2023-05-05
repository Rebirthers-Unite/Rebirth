import React, {useEffect, useState} from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [programs, setPrograms] = useState([])

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
	  fetch('https://rebirth-ktaf.onrender.com/programs')
      .then(response => response.json())
      .then(programData => setPrograms(programData))
	},[])

	const programLink = programs.map((program) => {
		return (
			<Dropdown.Item key={program.id.$oid} onClick={() => window.location.reload()}><NavLink to={`/program/${program.id.$oid}`} >{program.title}</NavLink></Dropdown.Item>
		)
	} )

	return (
		<div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4' id='navbar'>
			<img src={logo} alt='logo' style={{width: '110px', marginTop: '50px'}}/>
			<ul className='hidden md:flex'>
				<li className='p-4'>
					<NavLink to='/' className=' hover:text-yellow-300 hover:font-bold'>
					{' '}
					Home{' '}
					</NavLink>
				</li>
				
				<li className='p-4'>
					<NavLink
						to='/aboutus'
						className='hover:text-yellow-300 hover:font-bold'>
						{' '}
						About{' '}
					</NavLink>	
				</li>
				
				<li className='p-4'>
					<NavLink
						to='/blogs'
						className='hover:text-yellow-300 hover:font-bold'>
						Blogs
					</NavLink>
				</li>

				<Dropdown className='p-4'>
					<Dropdown.Toggle id='dropdown-toggle'>Programs</Dropdown.Toggle>
					<Dropdown.Menu>
						{programLink}
					</Dropdown.Menu>
				</Dropdown>

				<li className='p-4'>
					<NavLink
					to='/support'
					className='hover:text-yellow-300 hover:font-bold'>
					{' '}
					Support{' '}
					</NavLink>
				</li>
				
				<li className='p-4'>
					<NavLink
					to='/contact'
					className='hover:text-yellow-300 hover:font-bold'>
					{' '}
					Contact{' '}
					</NavLink>
				</li>
				
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

