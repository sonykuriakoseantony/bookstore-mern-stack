import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editAdminUserAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'

function AdminProfile() {

  const [userToken, setUserToken] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "", password: "", cpassword: "", picture: "", role: "", bio: "", id: ""
  });
  const [preview, setPreview] = useState("");
  const [existingUserImage, setExistingUserImage] = useState("");
  const [pswdMatch, setPswdMatch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const currentUserToken = sessionStorage.getItem("token");
      setUserToken(currentUserToken);
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserDetails({ ...userDetails, username: user.username, password: user.password, cpassword: user.cpassword?user.cpassword: "", role: user.role, bio: user.bio, id: user._id })
      setExistingUserImage(user.picture)
    }
  }, [userToken])

  console.log(userDetails);

  const handleResetForm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserDetails({
      username: user.username, role: user.role, bio: user.bio, password: "", cpassword: "", id: user._id
    })
    setPreview("");
  }

  const handleProfilePictureUpload = (e) => {
    console.log(e);

    const file = e.target.files[0];
    if (file) {
      console.log(file);
    }

    if (!file) return;

    const url = URL.createObjectURL(file);
    setUserDetails(prev => ({
      ...prev,
      picture: file
    }));

    setPreview(url);
  }

  const checkPasswordMatch = (data) => {
    setUserDetails({ ...userDetails, cpassword: data })
    userDetails.password == data ? setPswdMatch(true) : setPswdMatch(false)
  }

  const handleUpdateAdminUser = async () => {
    const { username, password, cpassword, bio, picture, role, id } = userDetails;
    // console.log(username, password, cpassword, bio, picture, role, id);

    if (!username || !password || !cpassword) {
      toast.info("Please fill all the fields");
      return;
    } else if (pswdMatch) {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData();
        for (let key in userDetails) {
          if (key != "picture") {
            reqBody.append(key, userDetails[key])
          }
          else {
            preview ? reqBody.append("picture", picture) : reqBody.append("picture", existingUserImage)
          }
        }
        // api call
        const result = await editAdminUserAPI(id, reqBody, reqHeader);
        if (result.status == 200) {
          toast.success("Updated successfully")
          setTimeout(() => {
            sessionStorage.clear()
            navigate('/login')
          }, 3000)
        } else {
          console.log(result);
          toast.error("Something went wrong")
        }
      }
    }
    else {
      toast.warning("Update failed! Password Mismatch")
    }
  }

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
              <h3 className='text-xl mb-4'>Welcome Admin!</h3>
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
            <div className='md:px-10'>
              <div className='flex justify-center items-center  flex-col my-5 bg-blue-100 p-5 md:p-10 rounded-lg'>
                <label htmlFor="userProfile">
                  <input type="file" id='userProfile' hidden onChange={e => handleProfilePictureUpload(e)} />
                  <div style={{ width: '230px', height: '230px', borderRadius: '50%' }} className='bg-white overflow-hidden'>
                    {
                      existingUserImage == "" ?
                        <img src={preview ? preview : 'https://cdn-icons-png.flaticon.com/512/12225/12225773.png'} alt="profile" style={{ objectFit: 'cover', width: '100%', height: '100%' }} className='z-52' />
                        :
                        existingUserImage.startsWith("https://lh3.googleusercontent.com/") ?
                          <img src={preview ? preview : existingUserImage} alt="profile" style={{ objectFit: 'cover', width: '100%', height: '100%' }} className='z-52' />
                          :
                          <img src={preview ? preview : `${serverURL}/uploads/${existingUserImage}`} alt="profile" style={{ objectFit: 'cover', width: '100%', height: '100%' }} className='z-52' />
                    }
                  </div>
                  <div className='bg-yellow-400 z-53 absolute text-white p-2 rounded cursor-pointer' style={{ marginLeft: '135px', marginTop: '-30px' }}><FaPen /></div>
                </label>
                <div className="mt-10 mb-3 w-full px-3">
                  <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className="w-full bg-white p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='New Password' className="w-full bg-white p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input value={userDetails.cpassword} onChange={(e) => checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Password' className="w-full bg-white p-2 rounded" />
                </div>
                {!pswdMatch &&
                  <div className='text-red-600 text-xs mb-3 px-3 w-full'>Confirm password must match with new password</div>
                }
                <div className='flex justify-end w-full px-5 gap-x-2'>
                  <button onClick={handleResetForm} className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600">Reset</button>
                  <button onClick={handleUpdateAdminUser} className="transition duration-300 ease-in-out bg-green-800 text-white px-3 py-2 rounded cursor-pointer border hover:bg-white hover:text-green-800 hover:border-green-800">Update</button>
                </div>
              </div>
            </div>
          </div>
                <ToastContainer autoClose={3000} position="top-center" theme='colored' />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default AdminProfile