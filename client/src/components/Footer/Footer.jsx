import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWordpress, FaRegCopyright, FaYoutube, FaHouseUser, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div className='max-w-[1380px] bg-black mx-auto py-6 px-6 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='md:lg:col-span-3 md:grid-cols-3 md:pl-2 sm:gap-20 sm:grid-cols-2 md:gap-6 md:grid justify-between cursor-pointer'>
            <div>
            <h1 className='font-bold sm:text-xl md:text-2xl text-[#824cc6]'> Useful Links </h1>
            <ul>
            <li className='py-1 text-medium'> Our Team </li>
            <li className='py-1 text-medium'> Privacy Policy </li>
            <li className='py-1 text-medium'> Our Blogs </li>
            <li className='py-1 text-medium'> Our Sponsors </li>
            </ul>
            </div>
            <div>
            <h1 className='font-bold sm:text-xl sm:py-2 md:text-2xl text-[#824cc6]'> Our Programs </h1>
            <ul>
            <li className='py-1 text-medium'> Safe House </li>
            <li className='py-1 text-medium'> Elimisha Project </li>
            <li className='py-1 text-medium'> Authentic Voices </li>
            <li className='py-1 text-medium'> Economic Empowerment </li>
            </ul>
            </div>
            <div>
            <h1 className='font-bold sm:text-xl sm:py-2 md:text-2xl text-[#824cc6]'> Contact Us </h1>
            <ul>
            <p className='py-1 text-medium flex gap-2 sm:py-2'><FaHouseUser className='sm:h-6 sm:w-8 md:h-6 md:w-6'/>Our Address: Magadi Road, Kiserian, Kajiado, Kenya, 00100</p>
            <p className='py-1 text-medium flex gap-2 sm:py-2'><FaMapMarkerAlt className='sm:h-6 sm:w-8 md:h-6 md:w-6'/>Service Areas: Kawangware, Nairobi, Kenya. Kajiado, Rift Valley, Kenya. Kibera, Nairobi. </p>
            <h2 className='py-1 text-medium flex gap-2 sm:py-2'><FaPhoneAlt className='sm:h-6 sm:w-8 md:h-6 md:w-6'/>0720339204 </h2>
            <p className='py-1 text-medium flex gap-2 sm:py-2'><MdEmail className='sm:h-6 sm:w-8 md:h-6 md:w-6'/>rebirthofaqueen20@gmail.com </p>
            </ul>
            </div>
            <div>
            <h1 className='w-full text-3xl font-bold text-[#ffcc3d]'> REBIRTH </h1>
            <div className='flex sm:gap-10 md:gap-12 py-2 justify-between'>
            <FaFacebook size={30} className='hover:text-[#3b5998] hover:scale-110'/>
            <FaInstagram size={30} className='hover:text-[#e1306c] hover:scale-110'/>
            <FaLinkedin size={30} className='hover:text-[#0077b5] hover:scale-110'/>
            <FaTwitter size={30} className='hover:text-[#55acee] hover:scale-110'/>
            <FaWordpress size={30} className='hover:text-[#21759c] hover:scale-110'/>
            <FaYoutube size={30} className='hover:text-[#c4302b] hover:scale-110'/>
        </div>
          <p className='py-2 flex pb-[-6rem]'> Copyright <FaRegCopyright className='flex ml-1 mt-1'/><span className="ml-1">{new Date().getFullYear()}</span></p>
        </div>          
        </div>
        </div>
  )
}

export default Footer