import React,  { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import './NavBar.css'

function Navbar() {
  	const [nav, setNav] = useState(false);
	const [programs, setPrograms] = useState([])

	useEffect(() => {
	  fetch('https://rebirth-ktaf.onrender.com/programs')
      .then(response => response.json())
      .then(programData => setPrograms(programData))
	},[])

	const programLink = programs.map((program) => {
		return (
			<Dropdown.Item key={program.id.$oid}><NavLink to={`/program/${program.id.$oid}`} >{program.title}</NavLink></Dropdown.Item>
		)
	} )

  useEffect(() => {
		// add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// cleanup on unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		// hide navbar when scroll position is greater than 50px
		if (window.scrollY > 50) {
			setNav(false);
		} else {
			setNav(true);
		}
	};

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className='text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4 z-1'>
      <NavLink to='/'>
        <img
          src={logo}
          alt='logo'
		  id='logo'
          className='client-logo sm:w-28 md:w-20 md: md:h-30 sm:pt-12 md:pt-2'
        />
      </NavLink>
      <ul className='hidden md:flex flex-wrap justify-end items-center gap-4'>
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
        <Dropdown className='p-4 mt-3'>
					<Dropdown.Toggle id='dropdown-toggle'>Programs</Dropdown.Toggle>
					<Dropdown.Menu>
						{programLink}
					</Dropdown.Menu>
		</Dropdown>
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
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <div
        className={
          nav
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
		  <li>
			<Dropdown className='p-4 mt-3'>
					<Dropdown.Toggle id='dropdown-toggle'>Programs</Dropdown.Toggle>
					<Dropdown.Menu>
						{programLink}
					</Dropdown.Menu>
			</Dropdown>
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
