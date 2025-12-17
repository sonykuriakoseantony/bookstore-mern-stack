import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllPageBooksAPI } from '../../services/allAPI'

function BooksArchive() {
  const [toggle, setToggle] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);

  console.log(allBooks);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const currentUserToken = sessionStorage.getItem("token");
      setUserToken(currentUserToken);
    }
    getAllBooks();
  }, [userToken])

  const getAllBooks = async () => {

    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getAllPageBooksAPI(reqHeader);

    if (result.status == 200) {
      setAllBooks(result.data)
    }
    else {
      console.log(result);

    }

  }

  return (
    <>
      <Header />
      {
        userToken ?
          <>
            <div className='flex flex-col justify-center items-center my-5'>
              <h1 className='text-3xl font-bold my-5'>All Books</h1>
              <div className='flex my-5 gap-0'>
                <input type="text" placeholder='Search by Book title' className="px-4 py-2 border border-gray-200 placeholder-gray-600 text-black w-100" />
                <button className='bg-blue-900 text-white px-4 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-900/85'>Search</button>
              </div>
            </div>

            {/* Books card and filter side bar */}
            <div className='md:px-20 mb-10 md:grid grid-cols-5 p-5'>
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
              <div className='col-span-4'>
                <div className='md:grid grid-cols-3 w-full mt-5 md:mt-0'>
                  {/* Duplicated books cards */}

                  {
                    allBooks?.length > 0 ?
                      allBooks?.map(books => (
                        <div key={books?._id} className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0 '>
                          <div style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
                            <img src={books?.imageURL} alt={books?.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div className='flex flex-col justify-center items-start m-4'>
                            <h3 className='text-blue-800 font-bold text-xl'>{books?.author}</h3>
                            <p>{books?.title}</p>
                            <Link to={`/books/${books?._id}/view`} className='mt-2 transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-blue-900 text-white border hover:bg-white hover:text-blue-800 hover:border-blue-800'>View Book</Link>
                          </div>
                        </div>
                      ))
                      :
                      <p>Books loading...</p>
                  }


                </div>
              </div>

            </div>
          </>
          :
          <>
            <div className="my-10 flex justify-center items-center flex-col min-h-[50vh]">
              <img className="w-75" alt="lock" src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" />
              <p className="font-semibold text-xl mt-6">Please <Link className="text-blue-700 font-bold underline" to={'/login'} >Login</Link> To Explore More....</p>
            </div>
          </>
      }
      <Footer />
    </>
  )
}

export default BooksArchive