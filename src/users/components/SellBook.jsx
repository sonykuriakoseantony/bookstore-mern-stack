import React from 'react'

function SellBook() {
  return (
    <>
      <div>
        <div className='p-10 my-20 mx-5 bg-gray-200'>
          <div className="text-center text-3xl font-medium">Book Details</div>
          <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
              <div className="mb-3 ">
                <input placeholder="Book Title" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Author" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="No. of Pages" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Image URL" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Discount Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <textarea placeholder="Abstract" name="" id="" rows="5" className="w-full p-2  rounded placeholder-gray-400 text-black bg-white"></textarea>
              </div>

            </div>
            <div className='px-3'>
              <div className="mb-3 ">
                <input placeholder="Publisher" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Language" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="ISBN" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input placeholder="Category" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div class="mb-3 flex justify-center items-center mt-10">
                <label htmlFor="uploadProfile" className='cursor-pointer'>
                  <input id="uploadProfile" className="hidden cursor-pointer" type="file" name="" />
                  <img width="200px" height="200px" alt="upload" src="/upload-file.webp" />
                </label>
              </div>
            </div>
          </div>
          <div className="p-3 w-full flex md:justify-end justify-center  mt-8">
            <button className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600" >Reset</button>
            <button class="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-blue-900 text-white ms-3 border hover:bg-white hover:text-blue-900 hover:border-blue-900">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellBook