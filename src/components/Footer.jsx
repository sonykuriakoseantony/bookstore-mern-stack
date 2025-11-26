import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>
        <div>
          <h4 className="font-bold">ABOUT US</h4>
          <p className="text-justify mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum laudantium earum fugit fugiat eius voluptas aperiam numquam, quos, ratione non laborum sed facere ab nesciunt enim, quo necessitatibus vero!</p>
        </div>
        <div className='my-5 md:m-0'>
          <h4 className="font-bold">NEWS LETTER</h4>
          <p className="my-2 md:my-5">Stay updated with our latest trends</p>
          <div className="flex">
            <input placeholder="Email ID" className="p-2 bg-white placeholder-gray-500" type="text" />
            <button className="bg-yellow-500 py-2 px-3" ><FaArrowRight /></button>
          </div>
        </div>
        <div>
          <h4 className="font-bold">FOLLOW US</h4>
          <p className="my-2 md:my-5">Let us be social</p>
          <div className="flex gap-3" >
            <a href="https://www.instagram.com/luminartechnolab/"><FaInstagram size={20} /></a>
            <a href="https://x.com/Luminartechno"><FaXTwitter size={20} /></a>
            <a href="https://www.facebook.com/luminartechnolab"><FaFacebook size={20} /></a>
            <a href="https://www.linkedin.com/company/luminartechnolab/"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="bg-black p-3 text-center text-white">
        <p>Copyright © 2025 All rights reserved | This website is made with ❤ By Luminar Technolab</p>
      </div>
    </>
  )
}

export default Footer