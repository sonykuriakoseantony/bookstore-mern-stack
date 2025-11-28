import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <>
      <div className='bg-blue-100 h-fit md:min-h-screen md:h-full py-10'>
        <div className='flex justify-center'>
          <img style={{width : '200px', height : '200px', borderRadius : '505%'}} src="/author.jpg" alt="Profile pic" />
        </div>
        <h1 className='text-xl text-center font-bold my-5'>Author name</h1>

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