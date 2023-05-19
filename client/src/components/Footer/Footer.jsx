import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWordpress, FaRegCopyright, FaYoutube, FaHouseUser, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {Link} from 'react-router-dom'

function Footer() {
	const ourPrograms = [
		'Safe House',
		'Elimisha Project',
		'Authentic Voices',
		'Economic Empowerment',
	];

	return (
		<div className='max-w-[100vw] bg-black mx-auto font-serif py-6 px-6 grid lg:grid-cols-3 gap-8 text-gray-300'>
			<div className='md:lg:col-span-3 md:grid-cols-3 md:pl-2 sm:gap-20 sm:grid-cols-2 md:gap-6 md:grid justify-between cursor-pointer'>
				<div>
					<h1 className='font-bold font-serif sm:text-xl md:text-2xl text-[#824cc6]'>
						Useful Links
					</h1>
					<ul style={{lineHeight: '30px'}}>
						<Link to='/aboutus'>About</Link><br></br>
						<Link to='/blogs'>Blogs</Link><br></br>
						<Link to='/programs'>Programs</Link><br></br>
						<Link to='/support'>Support</Link><br></br>
						<Link to='/contact'>Contact</Link><br></br>
					</ul>
				</div>
				<div>
					<h1 className='font-bold font-serif sm:text-xl sm:py-2 md:text-2xl text-[#824cc6]'>
						Our Programs
					</h1>
					<ul style={{lineHeight: '30px'}}>
						{ourPrograms.map((e, index) => (
							<div key={index}>
								<Link key={index} className='py-1 text-medium' to='/programs'>{e}</Link><br></br>
							</div>
						))}
					</ul>
				</div>
				<div>
					<h1 className='font-bold font-serif sm:text-xl sm:py-2 md:text-2xl text-[#824cc6]'>
						Contact Us
					</h1>
					<ul>
						<p className='py-1 text-medium flex gap-2 sm:py-2'>
							<FaHouseUser className='sm:h-6 sm:w-8 md:h-6 md:w-6' />
							Our Address: Magadi Road, Kiserian, Kajiado, Kenya, 00100
						</p>
						<p className='py-1 text-medium flex gap-2 sm:py-2'>
							<FaMapMarkerAlt className='sm:h-6 sm:w-8 md:h-6 md:w-6' />
							Service Areas: Kiserian, Kajiado. Kibera, Nairobi.
						</p>
						<h2 className='py-1 text-medium flex gap-2 sm:py-2'>
							<FaPhoneAlt className='sm:h-6 sm:w-8 md:h-6 md:w-6' />
							0720339204
						</h2>
						<p className='py-1 text-medium flex gap-2 sm:py-2'>
							<MdEmail className='sm:h-6 sm:w-8 md:h-6 md:w-6' />
							rebirthofaqueen20@gmail.com
						</p>
					</ul>
				</div>
				<div>
					<h1 className='w-full text-3xl font-bold font-serif text-[#ffcc3d]'>REBIRTH OF A QUEEN</h1>
					<div className='flex sm:gap-10 md:gap-12 py-2 justify-between'>
						<a href='https://www.facebook.com/RebirthofaQueen'>
							<FaFacebook
								size={30}
								className='hover:text-[#3b5998] hover:scale-110'
							/>
						</a>
						<a href='https://www.instagram.com/rebirthofa.queen/?hl=en'>
							<FaInstagram
								size={30}
								className='hover:text-[#e1306c] hover:scale-110'
							/>
						</a>
						<a href='https://www.linkedin.com/in/rebirth-of-a-queen-organization-856b04220/?originalSubdomain=ke'>
							<FaLinkedin
								size={30}
								className='hover:text-[#0077b5] hover:scale-110'
							/>
						</a>
						<a href='https://twitter.com/queen_rebirth?lang=en'>
							<FaTwitter
								size={30}
								className='hover:text-[#55acee] hover:scale-110'
							/>
						</a>
						<a href='https://rebirthofaqueen.org'>
							<FaWordpress
								size={30}
								className='hover:text-[#21759c] hover:scale-110'
							/>
						</a>
						<a href='https://www.youtube.com/@rebirthofaqueen6849'>
							<FaYoutube
								size={30}
								className='hover:text-[#c4302b] hover:scale-110'
							/>
						</a>
					</div>
					<p className='py-2 flex pb-[-6rem]'>
						Copyright <FaRegCopyright className='flex ml-1 mt-1' />
						<span className='ml-1'>{new Date().getFullYear()}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer