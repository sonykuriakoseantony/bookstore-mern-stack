import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {
  const [allBoughtBooks, setAllBoughtBooks] = useState([]);

  useEffect(() => {
    getAllUserBoughtBooks()
  }, [])

  const getAllUserBoughtBooks = async () => {

    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getAllUserBoughtBooksAPI(reqHeader);

    if (result.status == 200) {
      setAllBoughtBooks(result.data)
    }
    else {
      console.log(result);
    }
  }
  return (
    <>
      <div className="p-10 my-20 shadow rounded">
        {/* duplicate purchase */}
        {
          allBoughtBooks?.length > 0 ?
            allBoughtBooks?.map(book => (
              <div key={book?._id} className='p-5 rounded mt-4 bg-gray-100'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                  <div className='px-4'>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h2 className='text-xl'>{book?.author}</h2>
                    <h3 className='text-lg text-blue-700'>Price ${book?.discountPrice} </h3>
                    <p className='text-justify'>{book?.abstract}</p>
                    <div className='flex mt-3'>
                      <img width={'120px'} src="/purchase.png" alt="Pending" />
                    </div>
                  </div>
                  <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-full' src={book?.imageURL} alt="book" />
                  </div>
                </div>
              </div>
            ))

            :

            <div className="flex justify-center items-center flex-col">
              <img width={"45%"} height={"200px"} alt="book" src="/book-loader-inner.gif" />
              <p className="font-bold text-xl">Books not purchased  yet!!!</p>
            </div>
        }

      </div>
    </>
  )
}

export default Purchase