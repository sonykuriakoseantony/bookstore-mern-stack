import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>

      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>

          <h1 className='text-center mb-10 font-bold text-3xl'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            <div>
              <h3 className='text-xl'>Welcome Admin!</h3>
              <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia porro vitae repellat provident tenetur laboriosam quidem harum, reprehenderit neque. Minus perferendis, rem exercitationem sint aliquam placeat dolores consequatur facilis?</p>

              <p className='text-lg my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A libero voluptates temporibus suscipit provident vitae tenetur? Veniam quis expedita ipsum magnam rerum qui incidunt quos eveniet nostrum officiis. Blanditiis, quasi!</p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Doloribus, cum. </li>
                <li>Quaerat voluptatibus numquam asperiores magni quis adipisci blanditiis iste laudantium accusantium tempora, illo eum optio et. </li>
                <li>Facere eligendi sed consequatur.</li>

              </ul>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure numquam, praesentium consequatur accusamus nemo mollitia. Magnam ab soluta sed, aspernatur quam rerum veritatis nobis hic ullam natus, a, reiciendis voluptatibus!</p>
            </div>
            <div className='px-10'>
              <div className='flex justify-center items-center  flex-col my-5 bg-blue-100 p-10 rounded-lg'>
                <label htmlFor="userProfile">
                  <input type="file" id='userProfile' hidden />
                  <img width={'150px'} height={'150px'} src="/author.jpg" alt="profile" className='z-52 rounded-full border-5 border-gray-500' />
                  <button className='bg-yellow-400 z-53 text-white p-2 rounded cursor-pointer' style={{ marginLeft: '85px', marginTop: '-30px' }}><FaPen /></button>
                </label>
                <div className="mt-10 mb-3 w-full px-3">
                  <input type="text" placeholder='User Name' className="w-full bg-white p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input type="password" placeholder='New Password' className="w-full bg-white p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input type="password" placeholder='Confirm Password' className="w-full bg-white p-2 rounded" />
                </div>
                <div className='flex justify-end w-full px-5 gap-x-2'>
                  <button className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600">Reset</button>
                  <button className="transition duration-300 ease-in-out bg-green-800 text-white px-3 py-2 rounded cursor-pointer border hover:bg-white hover:text-green-800 hover:border-green-800">Update</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />

    </>
  )
}

export default AdminProfile