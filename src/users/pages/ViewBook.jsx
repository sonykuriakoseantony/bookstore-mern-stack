import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { getSingleBookDetailsAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false);
  const [bookDetails, setBookDetails] = useState({})
  const { id } = useParams();

  console.log(bookDetails);

  useEffect(() => {
    getBookDetails();
  }, [])

  const getBookDetails = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    // call api to get book details
    const result = await getSingleBookDetailsAPI(id, reqHeader);

    if (result.status == 200) {
      setBookDetails(result.data)
    }
    else {
      console.log(result);
    }
  }

  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-200 rounded-md'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            <div className='col-span-1'>
              <img className='w-full' src={bookDetails?.imageURL} alt={bookDetails?.title} />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <h1 className='font-bold text-xl'>{bookDetails?.title}</h1>
                <button className='text-gray-400 transition duration-300 ease-in-out cursor-pointer hover:text-gray-600' onClick={() => setModalStatus(!modalStatus)}><FaEye size={22} /></button>
              </div>
              <h3 className='my-5 text-xl text-blue-800'>~{bookDetails?.author}</h3>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <div className='col-span-1'>
                  <p><span className='font-bold'>Publisher :</span> {bookDetails?.publisher}</p>
                  <p><span className='font-bold'>Seller Mail :</span> {bookDetails?.sellerMail}</p>
                  <p><span className='font-bold'>Category</span> : {bookDetails?.category}</p>
                </div>
                <div className='col-span-1'>
                  <p><span className='font-bold'>Language</span> : {bookDetails?.language}</p>
                  <p><span className='font-bold'>Real Price :</span> ${bookDetails?.price}</p>
                </div>
                <div className='col-span-1'>
                  <p><span className='font-bold'>No: of pages :</span> {bookDetails?.pages}</p>
                  <p><span className='font-bold'>ISBN</span> : {bookDetails?.isbn}</p>
                </div>
              </div>
              <p>{bookDetails?.abstract}</p>
              <div className='flex justify-end gap-x-4 mt-6'>
                <Link to={'/books'} className='transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-blue-900 text-white border hover:bg-white hover:text-blue-800 hover:border-blue-800 flex items-center gap-x-2'><FaBackward />Back</Link>
                <button className='transition duration-300 ease-in-out cursor-pointer py-2 px-4 rounded bg-green-700 text-white border hover:bg-white hover:text-green-700 hover:border-green-700 flex items-center gap-x-2'>Buy ${bookDetails?.discountPrice}</button>
              </div>
            </div>
          </div>
        </div>
        {/* Books listing Modal */}
        {
          modalStatus &&
          <div className='relative z-10 over-flow-y-auto ' onClick={() => setModalStatus(!modalStatus)}>
            <div className="bg-gray-500/75 fixed inset-0">
              <div className='flex justify-center items-center min-h-screen scroll-auto'>
                <div className='bg-white rounded-2xl md:w-250 w-100'>
                  {/* Modal Header */}
                  <div className="bg-black text-white flex justify-between items-center p-3">
                    <h2>Books Images</h2>
                    <button className='cursor-pointer' onClick={() => setModalStatus(!modalStatus)}><CgClose size={20} /> </button>
                  </div>
                  {/* Modal Body */}
                  <div className='relative p-5 '>
                    <p className='text-blue-800 flex items-center gap-x-2'><FaCamera />Camera click of books in hands of seller</p>
                    {/* Books in row and column */}
                    <div className="md:flex flex-wrap my-5">

                      {
                        bookDetails?.uploadImg?.length > 0 ?
                          bookDetails?.uploadImg?.map((img, index) => (
                            <img key={index} className='md:w-75 w-25 md:me-2 mb-3 md:mb-0' src={`${serverURL}/uploads/${img}`} alt="book" />
                          ))

                          :

                          <p className='font-bold text-lg'>No uploaded images of book available</p>
                      }
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