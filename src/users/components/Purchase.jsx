import React from 'react'

function Purchase() {
  return (
    <>
      <div className="p-10 my-20 shadow rounded">
        {/* duplicate purchase */}
        <div className='p-5 rounded mt-4 bg-gray-100'>
          <div className='md:grid grid-cols-[3fr_1fr]'>
            <div className='px-4'>
              <h1 className='text-2xl'>Title </h1>
              <h2 className='text-xl'>Author </h2>
              <h3 className='text-lg text-blue-700'>Price $12 </h3>
              <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, voluptates? Tempora nemo quia repellat ipsum illo consequuntur fugiat eius! Corporis accusantium totam dolore assumenda, reiciendis suscipit modi aut repellat alias.</p>
              <div className='flex mt-3'>
                <img width={'120px'} src="/purchase.png" alt="Pending" />
              </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
              <img className='w-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="book" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center flex-col">
          <img width={"45%"} height={"200px"} alt="book" src="/book-loader-inner.gif" />
          <p className="font-bold text-xl">Books not purchased  yet!!!</p>
        </div> */}
      </div>
    </>
  )
}

export default Purchase