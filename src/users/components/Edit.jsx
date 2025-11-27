import React, { useState } from 'react'
import { BiCloset } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [OffCanvasStatus, setOffCanvasStatus] = useState(false)
  return (
    <>
    <div>
      <button onClick={()=>setOffCanvasStatus(true)} className='flex items-center justify-center gap-x-2 text-blue-700 border rounded border-blue-700 px-4 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-50'><FaEdit />Edit</button>

      {/* OffCanvas */}
      {
        OffCanvasStatus &&
        <div>
        <div className='fixed inset-0 bg-gray-500/75 w-full h-full'></div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
          {/* HEader */}
          <div className='flex justify-between bg-black text-white text-2xl px-3 py-4'>
            <h1>Update User Profile</h1>
            <CgClose className=' cursor-pointer' size={25} onClick={()=>setOffCanvasStatus(false)}/>
          </div>

          {/* Body */}
          <div className='flex justify-center items-center  flex-col my-5'>
            <label htmlFor="userProfile">
              <input type="file" id='userProfile' hidden/>
              <img width={'150px'} height={'150px'} src="/author.jpg" alt="profile" className='z-52 rounded-full border-5 border-gray-500'/>
              <button className='bg-yellow-400 z-53 fixed text-white p-2 rounded cursor-pointer' style={{marginLeft : '85px',marginTop:'-30px'}}><FaPen /></button>
            </label>
            <div className="mt-10 mb-3 w-full px-3">
              <input type="text" placeholder='User Name' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-3 w-full px-3">
              <input type="password" placeholder='New Password' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-3 w-full px-3">
              <input type="password" placeholder='Confirm Password' className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-3 w-full px-3">
              <textarea type="text" placeholder='Bio' className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <div className='flex justify-end w-full px-5 gap-x-2'>
              <button className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600">Reset</button>
              <button className="transition duration-300 ease-in-out bg-green-800 text-white px-3 py-2 rounded cursor-pointer border hover:bg-white hover:text-green-800 hover:border-green-800">Update</button>
            </div>
          </div>
        </div>
      </div>
      }
      
    </div>
    
    </>
  )
}

export default Edit