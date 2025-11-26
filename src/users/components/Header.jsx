import React, { useState } from 'react'
import { FaBars, FaHamburger, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';

function Header() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        {/* Logo */}
        <div className='flex items-center '>
          <img src="https://w7.pngwing.com/pngs/456/741/png-transparent-pile-of-books-computer-icons-book-stack-of-books-comic-book-photography-booking-thumbnail.png" alt="" width={'50px'} height={'50px'} />
          <h1 className="text-2xl font-bold ms-2 uppercase md:hidden">Book Store</h1>
        </div>
        {/* Title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className="text-3xl font-bold uppercase">Book Store</h1>
        </div>
        {/* Login controls */}
        <div className='hidden md:flex justify-end items-center gap-2'>
          <div className='flex gap-2'>
            <a href="https://www.instagram.com/luminartechnolab/"><FaInstagram /></a>
            <a href="https://x.com/Luminartechno"><FaXTwitter /></a>
            <a href="https://www.facebook.com/luminartechnolab"><FaFacebook /></a>
          </div>
          <Link to={'/login'} className='border border-black rounded py-2 px-3 flex justify-center items-center gap-2 hover:bg-black hover:text-white'>
            <BiUser className='me-1'/> Login
          </Link>
        </div>
      </div>
      <nav id='secondaryHeaderNav' className='w-full px-3 py-1 md:flex justify-center items-center gap-2 bg-black text-white'>
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button className='cursor-pointer' onClick={()=>setToggle(!toggle)}>
            <FaBars />
          </button>
          <Link to={'/login'} className='border border-black rounded py-2 px-3 flex justify-center items-center gap-2'>
            <BiUser /> Login
          </Link>
        </div>
        <ul className={toggle?'flex flex-col uppercase gap-3 py-2':'hidden md:flex justify-center items-center uppercase'}>
          <li className='md:mx-4'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='md:mx-4'>
            <Link to={'/books'}>Books</Link>
          </li>
          {/* <li className='md:mx-4'>
            <Link to={'/careers'}>Careers</Link>
          </li> */}
          <li className='md:mx-4'>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header