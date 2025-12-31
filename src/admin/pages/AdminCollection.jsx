import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI';
import serverURL from '../../services/serverURL';
import { BiCheckCircle } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';

function AdminCollection() {
  const [tabIndex, setTabIndex] = useState(1);
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([])

  console.log(allBooks);
  console.log(allUsers);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      if (tabIndex == 1) {
        getAllBooks(token);
      }
      else {
        // get all users
        getAllUsersByAdmin(token)
      }
    }
  }, [tabIndex])

  const getAllBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    // call api to get book details
    const result = await getAllAdminBooksAPI(reqHeader);

    if (result.status == 200) {
      setAllBooks(result.data)
    }
    else {
      console.log(result);
    }
  }

  const getAllUsersByAdmin = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    // call api to get book details
    const result = await getAllUsersAPI(reqHeader);

    if (result.status == 200) {
      setAllUsers(result.data)
    }
    else {
      console.log(result);
    }
  }

  const updateBookStatus = async (bookId) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      // call api to get book details
      const result = await updateBookStatusAPI(bookId, reqHeader);

      if (result.status == 200) {
        toast.success("Book Status Updated Successfully");
        getAllBooks(token);
      }
      else {
        console.log(result);
      }
    }
  }

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
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* Duplicate Book cards */}
              {
                allBooks?.length > 0 ?
                  allBooks?.map((book) => (
                    <div key={book?._id} className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0 text-center'>
                      <img src={book?.imageURL} alt="Alchemist" style={{ width: 'auto', height: '300px', margin: 'auto' }} />
                      <div className='flex flex-col justify-center items-center m-4'>
                        <h3 className='text-blue-700 font-bold text-xl'>{book?.author}</h3>
                        <p>{book?.title}</p>
                        <p>${book?.price}</p>
                      </div>
                      {
                        book?.status != "approved" ?
                          <button onClick={() => updateBookStatus(book?._id)} className='text-center transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-green-800 text-white border hover:bg-white hover:text-green-800 hover:border-green-800'>Approve</button>

                          :

                          <BiCheckCircle className='text-green-800 mx-auto' size={30} />
                      }
                    </div>
                  ))

                  :

                  <p className='font-bold text-lg text-red-700'>No Books to display</p>
              }

            </div>
          }
          {
            tabIndex == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* Duplicate user card */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map(user => (
                    <div key={user?._id} className='rounded bg-gray-200 pt-3 pb-4 px-5 m-2'>
                      <p className='text-red-600 font-bold ps-2'>ID : {user?._id}</p>

                      <div className='flex items-center mt-3'>
                        <div className="flex justify-center">
                          {
                            user?.picture ?
                              <img alt="Profile pic" src={user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture : `${serverURL}/uploads/${user?.picture}`} width={'60px'} height={'60px'} className='rounded-full shrink-0' />

                              :

                              <img alt="Profile pic" src="https://cdn-icons-png.flaticon.com/512/12225/12225773.png" width={'60px'} height={'60px'} className='rounded-full shrink-0' />

                          }

                        </div>
                        <div className='flex flex-col ml-3 w-full'>
                          <h4 className='text-blue font-bold text-lg'>{user?.username}</h4>
                          <p className='text-sm' style={{ wordBreak: "break-all" }}>{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))

                  :

                  <p className='font-bold text-lg text-red-700'>No Users to display</p>
              }

            </div>
          }

        </div>
        <ToastContainer autoClose={3000} position="top-center" theme='colored' />
      </div>
      <Footer />
    </>
  )
}

export default AdminCollection;