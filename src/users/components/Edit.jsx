import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaEdit, FaPen } from 'react-icons/fa'
import serverURL from "../../services/serverURL"

function Edit() {
  const [OffCanvasStatus, setOffCanvasStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "", password: "", cpassword: "", picture: "", role: "", bio: ""
  });
  const [preview, setPreview] = useState("");
  const [existingUserImage, setExistingUserImage] = useState("");



  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserDetails({ ...userDetails, username: user.username, password: user.password, cpassword: user.cpassword, role: user.role, bio: user.bio })
      setExistingUserImage(user.picture)
    }
  }, [])

  console.log(userDetails);

  const handleResetForm = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserDetails({
      username: user.username, role: user.role, bio: user.bio, password: "", cpassword: ""
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
      picture: [...prev.picture, file]
    }));

    setPreview(url);

  }

  console.log(existingUserImage);


  return (
    <>
      <div>
        <button onClick={() => setOffCanvasStatus(true)} className='flex items-center justify-center gap-x-2 text-blue-700 border rounded border-blue-700 px-4 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-50'><FaEdit />Edit</button>

        {/* OffCanvas */}
        {
          OffCanvasStatus &&
          <div>
            <div className='fixed inset-0 bg-gray-500/75 w-full h-full'></div>
            <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
              {/* HEader */}
              <div className='flex justify-between bg-black text-white text-2xl px-3 py-4'>
                <h1>Update User Profile</h1>
                <CgClose className=' cursor-pointer' size={25} onClick={() => setOffCanvasStatus(false)} />
              </div>

              {/* Body */}
              <div className='flex justify-center items-center  flex-col my-5'>
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
                  <div className='bg-yellow-400 z-53 fixed text-white p-2 rounded cursor-pointer' style={{ marginLeft: '135px', marginTop: '-30px' }}><FaPen /></div>
                </label>
                <div className="mt-10 mb-3 w-full px-3">
                  <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='New Password' className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <input value={userDetails.cpassword} onChange={e => setUserDetails({ ...userDetails, cpassword: e.target.value })} type="password" placeholder='Confirm Password' className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="mb-3 w-full px-3">
                  <textarea value={userDetails.bio} onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })} type="text" placeholder='Bio' className="w-full border border-gray-300 p-2 rounded"></textarea>
                </div>
                <div className='flex justify-end w-full px-5 gap-x-2'>
                  <button className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600" onClick={handleResetForm}>Reset</button>
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