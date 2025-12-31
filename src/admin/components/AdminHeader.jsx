import React, { useContext, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../../contextAPI/AuthContext';

function AdminHeader() {
  const { setAuthorisedUser } = useContext(routeGuardContext);
  const [userToken, setUserToken] = useState("");
  const [userDp, setUserDp] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear();
    setAuthorisedUser(false);
    setUserToken("");
    setUserDp("");
    setDropDown(false);
    navigate('/')
  }
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        <div className='flex items-center '>
          <Link to={'/'} className='flex items-center '>
            <img src="https://w7.pngwing.com/pngs/456/741/png-transparent-pile-of-books-computer-icons-book-stack-of-books-comic-book-photography-booking-thumbnail.png" alt="" width={'50px'} height={'50px'} />
            <h1 className="text-2xl font-bold ms-2 uppercase">Book Store</h1>
          </Link>
        </div>
        <div>
          <Link to={'/login'} onClick={logout} className='border border-black rounded py-1 px-3 flex justify-center items-center gap-2 bg-black text-white'>
            <FaPowerOff />Logout
          </Link>
        </div>
      </div>
      <div id='secondaryHeaderNav' className='w-full px-3 py-2 md:flex justify-center items-center gap-2 bg-black text-white'>
        <marquee behavior="" direction="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias, tempore reprehenderit id numquam nisi nihil.</marquee>
      </div>
    </>
  )
}

export default AdminHeader