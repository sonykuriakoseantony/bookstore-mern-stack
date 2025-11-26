import React from 'react'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaPhone } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className="text-3xl font-bold mb-5">Contacts</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque. Itaque. Et sequi quibusdam consequuntur maxime sint, quidem, velit a veniam blanditiis quis facilis odit, harum pariatur ipsum voluptatem rerum ut magnam earum reprehenderit. Labore soluta, expedita et nulla quibusdam veniam?</p>
        </div>
        <div className='lg:flex justify-evenly items-center my-10'>
          <div className='flex items-center w-75 lg:mt-0 mt-5 lg:me-4'>
            <div className='bg-gray-200 flex justify-evenly items-center me-5 shrink-0' style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
              <MdLocationPin size={22} />
            </div>
            <p>123 Main Street, Apt 4B, Anytown, CA 91234</p>
          </div>
          <div className='flex items-center w-75 lg:mt-0 mt-5'>
            <div className='bg-gray-200 flex justify-evenly items-center me-5 shrink-0' style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
              <FaPhone size={20} />
            </div>
            <p>+91 9876543210</p>
          </div>
          <div className='flex items-center w-75 lg:mt-0 mt-5'>
            <div className='bg-gray-200 flex justify-evenly items-center me-5 shrink-0' style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
              <MdEmail size={20} />
            </div>
            <p>bookstore@gmail.com</p>
          </div>
        </div>
        {/* Contact form and maps */}
        <div className='md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0 mb-5'>
          {/* Form */}
          <div className="bg-gray-200 p-5 rounded-md">
            <h1 className="text-xl text-center">Send me Message</h1>
            <div className="my-3">
              <input placeholder="Name" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" type="text" />
            </div>
            <div className="my-3">
              <input placeholder="E-Mail address" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" type="text" />
            </div>
            <div className="my-3">
              <textarea placeholder="Message" type="text" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" rows="5"></textarea>
            </div>
            <div className="my-3">
              <button className="cursor-pointer bg-black w-full text-xl text-white p-2 flex items-center justify-center gap-x-2">Send<IoIosSend size={22}/></button>
            </div>
          </div>

          {/* Maps */}
          <div className='w-full mt-5 md:mt-0'>
            <img src="/maps.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact