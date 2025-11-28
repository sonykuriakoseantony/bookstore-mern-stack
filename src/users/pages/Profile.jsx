import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {

  const [tabIndex, setTabIndex] = useState(1)


  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'>
      </div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-100px' }} className='bg-white p-3'>
        <img src="/author.jpg" alt="Profile image" width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className="font-bold md:text-3xl text-2xl">User name</h1>
          <FaCircleCheck className='text-blue-400 ms-3' />
        </div>
        <Edit />
      </div>
      <p className='text-justify md:px-20 px-5 my-5'>Welcome to your User Profile — the home of everything that defines your experience.
        This page gives you a quick overview of your personal details and preferences.
        Here, you can update your information and keep everything accurate and up to date.
        It's your central hub for managing settings, activity, and account visibility.
        We've designed it to be simple, secure, and effortless to navigate.
        Think of this space as your digital identity — organised, accessible, and uniquely yours.</p>
        {/* Tabs */}
        <div className='md:px-40'>
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <button onClick={()=>setTabIndex(1)} className={tabIndex==1?'border-l border-t border-r p-4 border-gray-200 text-blue-700 transition duration-300 ease-in-out' : 'border-b p-4 border-gray-200 cursor-pointer hover:bg-gray-50 hover:rounded transition duration-300 ease-in-out'}>Sell Books</button>
            <button onClick={()=>setTabIndex(2)} className={tabIndex==2?'border-l border-t border-r p-4 border-gray-200 text-blue-700' : 'border-b p-4 border-gray-200 cursor-pointer hover:bg-gray-50 hover:rounded transition duration-300 ease-in-out'}>Book Status</button>
            <button onClick={()=>setTabIndex(3)} className={tabIndex==3?'border-l border-t border-r p-4 border-gray-200 text-blue-700' : 'border-b p-4 border-gray-200 cursor-pointer hover:bg-gray-50 hover:rounded transition duration-300 ease-in-out'}>Purchase History</button>
          </div>
          {/* Contents */}
          {
            tabIndex == 1 &&
            <div> <SellBook /> </div>
          }
          {
            tabIndex == 2 &&
            <div> <BookStatus /> </div>
          }
          {
            tabIndex == 3 &&
            <div> <Purchase /> </div>
          }
          
        </div>
      <Footer />
    </>
  )
}

export default Profile