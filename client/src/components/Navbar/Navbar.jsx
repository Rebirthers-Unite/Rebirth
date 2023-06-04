import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar() {
  	const [nav, setNav] = useState(false);
	const [programs, setPrograms] = useState([])
	const [activeLink, setActiveLink] = useState('');


	useEffect(() => {
	  fetch('https://rebiirth.onrender.com/programs')
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
			setActiveLink('')
		} else {
			setNav(true);
		}
	};

  function handleNav() {
    setNav(!nav);
  }

  return (
		<div className='text-white cursor-pointer font-serif text-lg flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4 z-1'>
			<NavLink to='/'>
				<img
					src={logo}
					alt='logo'
					id='logo'
					className='client-logo sm:w-16 md:w-20 md:h-30 sm:pt-6 md:pt-2'
				/>
			</NavLink>
			<ul className='hidden md:flex flex-wrap justify-end items-center gap-4 '>
				<NavLink
					to='/'
					className={`p-4 hover:text-yellow-300 hover:font-bold ${
						activeLink === '/'
							? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110'
							: ''
					}`}
					onClick={() => setActiveLink('/')}>
					{' '}
					Home{' '}
				</NavLink>
				<NavLink
					to='/aboutus'
					className={`p-4 hover:text-yellow-300 hover:font-bold ${
						activeLink === '/aboutus'
							? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110'
							: ''
					}`}
					onClick={() => setActiveLink('/aboutus')}>
					{' '}
					About{' '}
				</NavLink>
				<NavLink
					to='/blogs'
					className={`p-4 hover:text-yellow-300 hover:font-bold ${
						activeLink === '/blogs'
							? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110'
							: ''
					}`}
					onClick={() => setActiveLink('/blogs')}>
					Blogs
				</NavLink>
				<Dropdown className='p-4 mt-3 hover:text-yellow-300 hover:font-bold'>
					<Dropdown.Toggle
						id='dropdown-toggle'
						className='p-4 hover:text-yellow-300 hover:font-bold'>
						Programs
					</Dropdown.Toggle>
					<Dropdown.Menu>{programLink}</Dropdown.Menu>
				</Dropdown>
				<NavLink
					to='/support'
					className={`p-4 hover:text-yellow-300 hover:font-bold ${
						activeLink === '/support'
							? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110'
							: ''
					}`}
					onClick={() => setActiveLink('/support')}>
					{' '}
					Support{' '}
				</NavLink>
				<NavLink
					to='/contact'
					className={`p-4 hover:text-yellow-300 hover:font-bold ${
						activeLink === '/contact'
							? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110'
							: ''
					}`}
					onClick={() => setActiveLink('/contact')}>
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
						<Dropdown className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
							<Dropdown.Toggle className='border-none uppercase hover:text-yellow-300 hover:font-bold'>
								Programs
							</Dropdown.Toggle>
							<Dropdown.Menu>{programLink}</Dropdown.Menu>
						</Dropdown>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/support'>Support</NavLink>
					</li>
					<li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
						<NavLink to='/contact'>Contact </NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
