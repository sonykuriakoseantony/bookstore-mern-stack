import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false);

  

  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-200 rounded-md'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            <div className='col-span-1'>
              <img className='w-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Boot title" />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <h1 className='font-bold text-xl'>Book Title</h1>
                <button className='text-gray-400 transition duration-300 ease-in-out cursor-pointer hover:text-gray-600' onClick={()=>setModalStatus(!modalStatus)}><FaEye size={22} /></button>
              </div>
              <h3 className='my-5 text-xl text-blue-800'>~Author</h3>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <div className='col-span-1'>
                  <p><span className='font-bold'>Publisher :</span> Penguin Life</p>
                  <p><span className='font-bold'>Seller Mail :</span> maxwell@gmail.com</p>
                  <p><span className='font-bold'>Category</span> : self-help</p>
                </div>
                <div className='col-span-1'>
                  <p><span className='font-bold'>Language</span> : English</p>
                  <p><span className='font-bold'>Real Price :</span> $15</p>
                </div>
                <div className='col-span-1'>
                  <p><span className='font-bold'>No: of pages :</span> 208</p>
                  <p><span className='font-bold'>ISBN</span> : 978-52364</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste harum quo, quia exercitationem dignissimos cumque nulla vel quisquam quibusdam sit molestias ullam quis possimus repellat aspernatur ipsam nisi necessitatibus voluptatibus.
                Rem provident esse asperiores molestias labore doloremque eum iste quisquam alias dolorum, voluptas, voluptate placeat illo! Quos perspiciatis facilis dolor architecto at voluptas veritatis iusto odio, et laudantium minima delectus.</p>
              <div className='flex justify-end gap-x-4 mt-6'>
                <Link to={'/books'} className='transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-blue-900 text-white border hover:bg-white hover:text-blue-800 hover:border-blue-800 flex items-center gap-x-2'><FaBackward />Back</Link>
                <button className='transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-green-700 text-white border hover:bg-white hover:text-green-700 hover:border-green-700 flex items-center gap-x-2'><FaBackward />Buy $17</button>
              </div>
            </div>
          </div>
        </div>
        {/* Books listing Modal */}
        {
          modalStatus &&
          <div className='relative z-10 over-flow-y-auto ' onClick={()=>setModalStatus(!modalStatus)}>
          <div className="bg-gray-500/75 fixed inset-0">
          <div className='flex justify-center items-center min-h-screen scroll-auto'>
            <div className='bg-white rounded-2xl md:w-250 w-100'>
              {/* Modal Header */}
              <div className="bg-black text-white flex justify-between items-center p-3">
                <h2>Books Images</h2>
                <button className='cursor-pointer' onClick={()=>setModalStatus(!modalStatus)}><CgClose size={20} /> </button>
              </div>
              {/* Modal Body */}
              <div className='relative p-5 '>
                <p className='text-blue-800 flex items-center gap-x-2'><FaCamera />Camera click of books in hands of seller</p>
                {/* Books in row and column */}
                <div className="md:flex flex-wrap my-5">
                  <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="book" />
                  <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="book" />
                  <img className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="book" />

                </div>
              </div>
            </div>
          </div>
            Modal
          </div>

        </div>
        }
      </div>


      <Footer />
    </>
  )
}

export default ViewBook