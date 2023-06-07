import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [activeLink, setActiveLink] = useState('');
  const [screenSize, setScreenSize] = useState('');
  const [showPrograms, setShowPrograms] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null); // New state variable

  useEffect(() => {
    fetch('https://rebiirth.onrender.com/programs')
      .then(response => response.json())
      .then(programData => setPrograms(programData));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setScreenSize('small');
      } else if (screenWidth < 992) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNav(false);
      setActiveLink('');
    } else {
      setNav(true);
    }
  };

  function handleNav() {
    setNav(!nav);
  }

  const handleProgramsHover = () => {
    setShowPrograms(true);
  };

  const handleProgramsLeave = () => {
    setShowPrograms(false);
  };

  const handleProgramClick = programId => {
    setSelectedProgram(programId);
    setShowPrograms(false);
  };

  return (
    <div className='text-white cursor-pointer font-serif text-lg flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4 z-1'>
      <NavLink to='/'>
        <img
          src={logo}
          alt='logo'
          id='logo'
          className={`client-logo ${screenSize === 'small' ? 'sm:w-12' : screenSize === 'medium' ? 'md:w-16 md:h-20' : 'md:w-20 md:h-30'} sm:pt-6 md:pt-2`}
        />
      </NavLink>
      <ul className={`hidden md:flex flex-wrap justify-end items-center gap-4 ${nav ? 'flex' : 'hidden'}`}>
        <NavLink
          to='/'
          className={`p-4 hover:text-yellow-300 hover:font-bold ${activeLink === '/' ? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110' : ''}`}
          onClick={() => setActiveLink('/')}>
          Home
        </NavLink>
        <NavLink
          to='/aboutus'
          className={`p-4 hover:text-yellow-300 hover:font-bold ${activeLink === '/aboutus' ? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110' : ''}`}
          onClick={() => setActiveLink('/aboutus')}>
          About
        </NavLink>
        <NavLink
          to='/blogs'
          className={`p-4 hover:text-yellow-300 hover:font-bold ${activeLink === '/blogs' ? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110' : ''}`}
          onClick={() => setActiveLink('/blogs')}>
          Blogs
        </NavLink>
        <li
          className={`p-4 hover:text-yellow-300 hover:font-bold ${showPrograms ? 'text-yellow-300' : ''}`}
          onMouseEnter={handleProgramsHover}
          onMouseLeave={handleProgramsLeave}
        >
          <span className="flex items-center">
            Programs
            <AiOutlineDown size={20} className="ml-1" />
          </span>
          {showPrograms && (
             <ul className="absolute mt-2 py-2 px-4 bg-white rounded-md text-purple-400 programs-list">
              {programs.map(program => (
                <li key={program.id.$oid}>
                  <NavLink
                    to={`/program/${program.id.$oid}`}
                    className={`block py-1 hover:text-yellow-300 ${selectedProgram === program.id.$oid ? 'hidden' : ''}`}
                    onClick={() => handleProgramClick(program.id.$oid)}
                  >
                    {program.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        <NavLink
          to='/support'
          className={`p-4 hover:text-yellow-300 hover:font-bold ${activeLink === '/support' ? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110' : ''}`}
          onClick={() => setActiveLink('/support')}>
          Support
        </NavLink>
        <NavLink
          to='/contact'
          className={`p-4 hover:text-yellow-300 hover:font-bold ${activeLink === '/contact' ? 'text-yellow-300 focus:outline-yellow focus:font-bold focus:scale-110' : ''}`}
          onClick={() => setActiveLink('/contact')}>
          Contact
        </NavLink>
      </ul>
      <div onClick={handleNav} className={`block md:hidden hover:text-yellow-300 hover:font-bold ${nav ? 'ai-icons' : ''}`}>
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[37%] md:hidden h-full border-r-gray-900 bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-12 uppercase'>
          <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
            <NavLink to='/aboutus'>About</NavLink>
          </li>
          <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
            <NavLink to='/blogs'>Blogs</NavLink>
          </li>
          <li
            className={`p-4 hover:text-yellow-300 border-b border-gray-900 hover:font-bold ${showPrograms ? 'text-yellow-300' : ''}`}
            onMouseEnter={handleProgramsHover}
            onMouseLeave={handleProgramsLeave}
          >
            <span className="flex items-center">
              Programs
              <AiOutlineDown size={20} className="ml-1" />
            </span>
            {showPrograms && (
               <ul className="absolute left-[200px] bottom-[-2px] mt-2 py-2 px-20 bg-white rounded-md text-purple-400 programs-list">
                {programs.map(program => (
                <li key={program.id.$oid}>
                  <NavLink
                    to={`/program/${program.id.$oid}`}
                    className={`block py-1 hover:text-yellow-300 ${selectedProgram === program.id.$oid ? 'hidden' : ''}`}
                    onClick={() => handleProgramClick(program.id.$oid)}
                  >
                    {program.title}
                  </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

