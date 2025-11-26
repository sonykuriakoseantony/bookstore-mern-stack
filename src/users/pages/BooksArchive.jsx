import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BooksArchive() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Header />
      <>
        <div className='flex flex-col justify-center items-center my-5'>
          <h1 className='text-3xl font-bold my-5'>All Books</h1>
          <div className='flex my-5 gap-0'>
            <input type="text" placeholder='Search by Book title' className="px-4 py-2 border border-gray-200 placeholder-gray-600 text-black w-100" />
            <button className='bg-blue-900 text-white px-4 cursor-pointer'>Search</button>
          </div>
        </div>

        {/* Books card and filter side bar */}
        <div className='md:px-20 mb-10 md:grid grid-cols-4 p-5'>
          {/* Filter */}
          <div className='col-span-1'>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-bold'>Filters</h2>
              <button className='md:hidden cursor-pointer' onClick={() => setToggle(!toggle)}><FaBars /></button>
            </div>
            {/* List of filters */}
            <div className={toggle ? "block" : "md:block hidden"} >
              {/* Duplicate filter item */}
              <div className='flex items-center mt-3'>
                <input type="radio" name="filtergroup" id="key1" className='cursor-pointer' />
                <label className='ms-2 cursor-pointer' htmlFor="key1">category-name</label>
              </div>
              <div className='flex items-center mt-3'>
                <input type="radio" name="filtergroup" id="all" className='cursor-pointer' />
                <label className='ms-2 cursor-pointer' htmlFor="all">No Filter</label>
              </div>
            </div>
          </div>

          {/* Bokks cards */}
          <div className='col-span-3'>
            <div className='md:grid grid-cols-4 w-full mt-5 md:mt-0'>
              <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%', height: '300px' }} />
                <div className='flex flex-col justify-center items-center m-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                  <p>Title</p>
                  <Link to={'/books/1/view'} className='bg-blue-900 text-white py-2 px-4 cursor-pointer mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%', height: '300px' }} />
                <div className='flex flex-col justify-center items-center m-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                  <p>Title</p>
                  <Link to={'/books/1/view'} className='bg-blue-900 text-white py-2 px-4 cursor-pointer mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%', height: '300px' }} />
                <div className='flex flex-col justify-center items-center m-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                  <p>Title</p>
                  <Link to={'/books/1/view'} className='bg-blue-900 text-white py-2 px-4 cursor-pointer mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%', height: '300px' }} />
                <div className='flex flex-col justify-center items-center m-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                  <p>Title</p>
                  <Link to={'/books/1/view'} className='bg-blue-900 text-white py-2 px-4 cursor-pointer mt-2'>View Book</Link>
                </div>
              </div>
              <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%', height: '300px' }} />
                <div className='flex flex-col justify-center items-center m-4'>
                  <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                  <p>Title</p>
                  <Link to={'/books/1/view'} className='bg-blue-900 text-white py-2 px-4 cursor-pointer mt-2'>View Book</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
      <Footer />
    </>
  )
}

export default BooksArchive