import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'; // Import the FiUser icon from React Icons library
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import useNavbarStore from '../../store';

const Navbar = () => {
<<<<<<< HEAD
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="text-white cursor-pointer flex justify-between items-center sticky h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#ffcc3d] flex">
				{' '}
				REBIRTH{' '}
			</h1>
			<ul className="hidden md:flex">
				<li className="p-4 hover:text-yellow-300 hover:font-bold"> Home </li>
				<li className="p-4 hover:text-yellow-300 hover:font-bold"> About </li>
				<li className="p-4 hover:text-yellow-300 hover:font-bold">
					{' '}
					Programs{' '}
				</li>
				<li className="p-4 hover:text-yellow-300 hover:font-bold"> Contact </li>
				<li className="p-4 hover:text-yellow-300 hover:font-bold"> Support </li>
				<li className="p-4 hover:text-yellow-300 hover:font-bold">
					{' '}
					<FiUser size={20} />{' '}
				</li>
			</ul>
			<div
				onClick={handleNav}
				className="block md:hidden hover:text-yellow-300 hover:font-bold"
			>
				{!nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
			</div>
			<div
				className={
					!nav
						? 'fixed left-0 top-0 w-[37%] h-full border-r-gray-900 bg-gray-600 ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}
			>
				<ul className="p-12 uppercase">
					<li className="p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold">
						{' '}
						Home{' '}
					</li>
					<li className="p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold">
						{' '}
						About{' '}
					</li>
					<li className="p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold">
						{' '}
						Programs{' '}
					</li>
					<li className="p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold">
						{' '}
						Contact{' '}
					</li>
					<li className="p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold">
						{' '}
						Support{' '}
					</li>
					<li className="p-4 hover:text-yellow-300 hover:font-bold"> Login </li>
				</ul>
			</div>
		</div>
	);
};
=======
  const [ nav, setNav ] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
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
      <div onClick={handleNav} className='block md:hidden hover:text-yellow-300 hover:font-bold'>
        {!nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[37%] md:hidden h-full border-r-gray-900 bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-12 uppercase'>
        <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'> Home </li>
        <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'> About </li>
        <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'> Programs </li>
        <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'> Contact </li>
        <li className='p-4 border-b border-gray-900 hover:text-yellow-300 hover:font-bold'> Support </li>
        <li className='p-4 hover:text-yellow-300 hover:font-bold'> Login </li>
        </ul>
      </div>
    </div>
  )
}
>>>>>>> c08fe84 (made amends to the navbar display settings)

//   const { isScrolled, setIsScrolled } = useNavbarStore();
//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10){
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//     }, [setIsScrolled])

//   return (
//     <div className={`flex justify-center rounded items-center h-16 bg-white shadow-lg px-6 py-4 sticky top-0 z-10 ${
//         isScrolled ? 'bg-red-500' : 'bg-transparent'
//       }`}>
//     <nav
//       className={`w-screen flex h-8 justify-between items-center${
//         isScrolled ? 'bg-red-500' : 'bg-transparent'
//       }`}
//     >
//       {/* Image Logo */}
//       <img src="logo.png" alt="Logo" className="h-12 w-auto" />

//       {/* Navbar Links */}
//       <ul className="flex space-x-4">
//         <li>
//           <a href="#" className={`text-${isScrolled ? 'white' : 'gray-600'} hover:text-gray-800`}>
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className={`text-${isScrolled ? 'white' : 'gray-600'} hover:text-gray-800`}>
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className={`text-${isScrolled ? 'white' : 'gray-600'} hover:text-gray-800`}>
//             Services
//           </a>
//         </li>
//         <li>
//           <a href="#" className={`text-${isScrolled ? 'white' : 'gray-600'} hover:text-gray-800`}>
//             Contact
//           </a>
//         </li>
//         <FiUser className={`text-${isScrolled ? 'white' : 'gray-600'} hover:text-gray-800 cursor-pointer`} />
//       </ul>
//     </nav>
//     </div>
//   );
// };

export default Navbar;
