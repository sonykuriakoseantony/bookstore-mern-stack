import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaHamburger, FaInstagram, FaPowerOff } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import serverURL from "../../services/serverURL"

function Header() {

  const [toggle, setToggle] = useState(false)
  const [userToken, setUserToken] = useState("");
  const [userDp, setUserDp] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const currentUserToken = sessionStorage.getItem("token");
      setUserToken(currentUserToken);
      const userData = JSON.parse(sessionStorage.getItem("user"));
      setUserDp(userData.picture);
    }
  }, [userToken])

  const logout = () => {
    sessionStorage.clear();
    setUserToken("");
    setUserDp("");
    setDropDown(false);
    navigate('/')
  }

  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        {/* Logo */}
        <div className='w-full col-span-2 md:col-span-1'>
          <Link to={'/'} className='flex items-center '>
            <img src="/bookstore-logo.png" alt="" width={'50px'} height={'50px'} />
            <h1 className="text-2xl font-bold ms-2 uppercase md:hidden">Book Store</h1>
          </Link>
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
          {/* Login link */}
          {
            !userToken ? (
              <Link to={'/login'} className='border border-black rounded py-2 px-3 flex justify-center items-center gap-2 hover:bg-black hover:text-white'>
                <BiUser className='me-1' /> Login
              </Link>
            )
              :
              (
                <div className=''>
                  <button onClick={()=>setDropDown(!dropDown)} className='cursor-pointer shadow-sm rounded ms-5 p-2 hover:bg-gray-100'>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%'}} className='bg-white overflow-hidden'>
                      <img src={userDp == "" ? "/user.png" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${serverURL}/uploads/${userDp}`} alt="Profile image" style={{objectFit : 'cover', width : '100%', height : '100%'}} />
                    </div>
                  </button>
                  {/* Dropdown content can go here */}
                  {
                    dropDown &&
                    <div className='shadow rounded p-2 absolute mt-2 right-3 bg-white z-10 w-40 ring-1 ring-black/5 focus:outline-hidden'>
                    {/* Profile link */}
                    <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm px-3 py-2'>
                      <FaAddressCard className='me-2' /> Profile    </Link>
                    {/* Logout button */}
                    <button className='flex items-center text-gray-700 text-sm px-3 py-2' onClick={logout}>
                      <FaPowerOff className='me-2' /> Logout    </button>
                  </div>
                  }
                </div>
              )
          }
        </div>
      </div>
      <nav id='secondaryHeaderNav' className='w-full px-3 py-1 md:flex justify-center items-center gap-2 bg-black text-white'>
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button className='cursor-pointer' onClick={() => setToggle(!toggle)}>
            <FaBars />
          </button>
          {/* Login link */}
          {
            !userToken ? (
              <Link to={'/login'} className='border border-black rounded py-2 px-3 flex justify-center items-center gap-2 hover:bg-black hover:text-white'>
                <BiUser className='me-1' /> Login
              </Link>
            )
              :
              (
                <div className=''>
                  <button onClick={()=>setDropDown(!dropDown)} className='cursor-pointer shadow-sm rounded ms-5 p-2 hover:bg-gray-100'>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%'}} className='bg-white overflow-hidden'>
                      <img src={userDp == "" ? "/user.png" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${serverURL}/uploads/${userDp}`} alt="Profile image" width={'100%'} height={'100%'} className="object-cover" />
                    </div>
                  </button>
                  {/* Dropdown content can go here */}
                  {
                    dropDown &&
                    <div className='shadow rounded p-2 absolute mt-2 right-3 bg-white z-10 w-40 ring-1 ring-black/5 focus:outline-hidden'>
                    {/* Profile link */}
                    <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm px-3 py-2'>
                      <FaAddressCard className='me-2' /> Profile    </Link>
                    {/* Logout button */}
                    <button className='flex items-center text-gray-700 text-sm px-3 py-2' onClick={logout}>
                      <FaPowerOff className='me-2' /> Logout    </button>
                  </div>
                  }
                </div>
              )
          }
        </div>
        <ul className={toggle ? 'flex flex-col uppercase gap-3 py-2' : 'hidden md:flex justify-center items-center uppercase py-2'}>
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