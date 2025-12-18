import React, { useEffect, useState } from 'react'
import { getAllUserProfileBooksAPI } from '../../services/allAPI';

function BookStatus() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllUserProfileBooks()
  }, [])

  const getAllUserProfileBooks = async () => {

    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getAllUserProfileBooksAPI(reqHeader);

    if (result.status == 200) {
      setAllBooks(result.data)
    }
    else {
      console.log(result);
    }
  }

  return (
    <>
      <div className="p-10 my-20 shadow rounded">
        {/* duplicate book */}
        {
          allBooks?.length > 0 ?
            allBooks?.map(book => (
              <div key={book?._id} className='p-5 rounded mt-4 bg-gray-100/75'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                  <div className='px-4'>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h2 className='text-xl'>{book?.author}</h2>
                    <h3 className='text-lg text-blue-700'>Discount Price ${book?.discountPrice} </h3>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className='flex mt-3'>

                      {
                        book?.status == "pending" ?
                          <img className='shrink-0' width={'80px'} src="/status-pending.png" alt="Pending" />
                          : book?.status == "approved" ?
                            <img className='shrink-0' width={'80px'} src="/status-approved.png" alt="Approved" />
                            :
                              <img className='shrink-0' width={'80px'} src="/status-sold.png" alt="Sold" />
                      }
                    </div>

                  </div>
                  <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-full' src={book?.imageURL} alt="book" />
                    <div className='mt-4 flex justify-end'><button className='cursor-pointer bg-red-600 px-4 py-2 border rounded text-white transition duration-300 ease-in-out hover:bg-white hover:text-red-600'>Delete</button></div>
                  </div>

                </div>
              </div>
            ))

            :
            <div className="flex justify-center items-center flex-col">
              <img width={"45%"} height={"200px"} alt="book" src="/book-loader-inner.gif" />
              <p className="font-bold text-xl">Books not uploaded yet!!!</p>
            </div>
        }


        {/*  */}
      </div>
    </>
  )
}

export default BookStatus