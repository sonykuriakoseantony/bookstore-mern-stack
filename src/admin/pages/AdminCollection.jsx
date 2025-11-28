import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function AdminCollection() {
  const [tabIndex, setTabIndex] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4'>
          <h1 className='font-bold text-3xl text-center my-10'>All Resources</h1>
          {/* Tabs */}
          <div className='md:px-40 w-full'>
            <div className='flex justify-center items-center my-8 font-medium text-lg'>
              <button onClick={() => setTabIndex(1)} className={tabIndex == 1 ? 'border-l border-t border-r p-4 border-gray-200 text-blue-700 transition duration-300 ease-in-out' : 'border-b p-4 border-gray-200 cursor-pointer hover:bg-gray-50 hover:rounded transition duration-300 ease-in-out'}>Books</button>
              <button onClick={() => setTabIndex(2)} className={tabIndex == 2 ? 'border-l border-t border-r p-4 border-gray-200 text-blue-700' : 'border-b p-4 border-gray-200 cursor-pointer hover:bg-gray-50 hover:rounded transition duration-300 ease-in-out'}>Users</button>
            </div>
          </div>
          {/* Contents */}
            {
              tabIndex == 1 &&
              <div className='md:grid grid-cols-3 w-full my-5'>
                <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0 text-center'>
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%' }} />
                  <div className='flex flex-col justify-center items-center m-4'>
                    <h3 className='text-blue-700 font-bold text-xl'>Author Name</h3>
                    <p>Title</p>
                    <p>$12</p>
                  </div>
                  <button className='text-center transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-green-800 text-white border hover:bg-white hover:text-green-800 hover:border-green-800'>Approve</button>
                </div>

                
              </div>
            }
            {
              tabIndex == 2 &&
              <div className='md:grid grid-cols-3 w-full my-5'> 
              {/* Duplicate user card */}
                <div className='rounded bg-gray-200 py-3 px-5 m-2'>
                  <p className='text-red-600 font-bold ps-2'>ID : 2457822 546546</p>

                 <div className='flex items-center mt-3'> 
                  <div class="flex justify-center">
                    <img alt="Profile pic" src="/author.jpg" width={'150px'} height={'150px'} className='rounded-full'/>
                    </div>
                  <div className='flex flex-col ml-3 w-full'>
                      <h4 className='text-blue font-bold text-lg'>User name</h4>
                      email
                  </div>
                  </div>

                </div>
              </div>
            }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection