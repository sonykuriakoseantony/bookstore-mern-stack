import React, { useEffect, useState } from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL';

function AdminSideBar() {

  const [userToken, setUserToken] = useState("");
  const [userName, setUserName] = useState("");
    const [userDp, setUserDp] = useState("");

  useEffect(() => {
      if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
        const currentUserToken = sessionStorage.getItem("token");
        setUserToken(currentUserToken);
        const userData = JSON.parse(sessionStorage.getItem("user"));
        setUserDp(userData?.picture);
        setUserName(userData?.username);
      }
    }, [userToken])
  console.log(userDp, userName);
  
  return (
    <>
      <div className='bg-blue-100 h-fit md:min-h-screen md:h-full py-10'>
        <div className='flex justify-center'>
          <img style={{width : '200px', height : '200px', borderRadius : '50%'}} src={userDp=="" ? "https://cdn-icons-png.flaticon.com/512/12225/12225773.png" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${serverURL}/uploads/${userDp}` } alt="Profile pic" />
        </div>
        <h1 className='text-xl text-center font-bold my-5'>{userName}</h1>

        {/* nav links */}
        <div className='mt-10 flex flex-col justify-center items-start w-25 m-auto'>
          <div className='mt-3'>
            <Link to={'/admin/home'} className='flex items-center gap-x-1'><FaChartSimple />Dashboard</Link>
          </div>
          <div className='mt-3'>
            <Link to={'/admin/collection'} className='flex items-center gap-x-1'><FaDatabase />Collections</Link>
          </div>
          <div className='mt-3'>
            <Link to={'/admin/profile'} className='flex items-center gap-x-1'><FaGear />Settings</Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminSideBar