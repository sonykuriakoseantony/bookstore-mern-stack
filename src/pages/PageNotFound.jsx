import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/AuthContext';

function PageNotFound() {

  const { role } = useContext(routeGuardContext);
  const navigate = useNavigate();

  const backHome = () => {
    console.log(role);
    
    if(role=='user'){
      navigate('/')
    }
    else{
      navigate('/admin/home')
    }
  }

  return (
    <>
      <div className='min-h-screen w-full md:flex justify-center items-center flex-col'>
        <img className="w-100" alt="page not found" src="/err-banner.gif" />
        <p className='text-xl'>Oh No!</p>
        <h1 className="text-3xl font-semibold">Look Like You're Lost</h1>
        <p>The page you are looking for is not available</p>
        <button onClick={backHome} className="bg-blue-900 text-white rounded p-2 my-5">Back Home</button>
      </div>
    </>
  )
}

export default PageNotFound