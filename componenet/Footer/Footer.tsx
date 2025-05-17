import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#25262b] text-white py-10 '>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-7  items-start'>
            <div className='mx-auto '>
                <h3 className="font-semibold pb-1 fede-up">Company</h3>
                <div className='w-[40px] bg-pink-700 h-[1.5px] mb-4'></div>
                <ul className='font-light text-gray-300 flex flex-col gap-2'>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">ABout</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Our Service</li>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Privacy Policy</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Affillate Program</li>
                </ul>
            </div>
            <div className='mx-auto '>
                <h3 className="font-semibold pb-1 fede-up">Get Help</h3>
                <div className='w-[40px] bg-pink-700 h-[1.5px] mb-4'></div>
                <ul className='font-light text-gray-300 flex flex-col gap-2'>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">FAQ</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Shipping</li>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Returns</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Orders Status</li>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Payment Options</li>
                </ul>
            </div>
            <div className='mx-auto'>
                <h3 className="font-semibold pb-1 fede-up">Online Shop</h3>
                <div className='w-[40px] bg-pink-700 h-[1.5px] mb-4'></div>
                <ul className='font-light text-gray-300 flex flex-col gap-2'>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Watch</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Bag</li>
                    <li className="fede-left cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Shoes</li>
                    <li className="fede-rigth cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-700">Dress</li>
                </ul>
            </div>
            <div className='mx-auto'>
                <h3 className="font-semibold pb-1 fede-up">Follow Us</h3>
                <div className='w-[40px] bg-pink-700 h-[1.5px] mb-4'></div>
                <ul className='flex gap-2'>
                    <li className='fade-in-up bg-[#55505c] rounded-full p-2 transition-all duration-300 hover:bg-pink-700 cursor-pointer'><FaFacebookF /></li>
                    <li className='fade-in-down bg-[#55505c] rounded-full p-2 transition-all duration-300 hover:bg-pink-700 cursor-pointer'><FaInstagram /></li>
                    <li className='fade-in-up bg-[#55505c] rounded-full p-2 transition-all duration-300 hover:bg-pink-700 cursor-pointer'><FaTwitter /></li>
                    <li className='fade-in-down bg-[#55505c] rounded-full p-2 transition-all duration-300 hover:bg-pink-700 cursor-pointer'><FaLinkedinIn /></li>
                </ul>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Footer
