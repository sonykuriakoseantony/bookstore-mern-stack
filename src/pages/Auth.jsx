import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { CgEyeAlt } from 'react-icons/cg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({ registerURL }) {
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: ''
  })

  const validateInputs = (inputTag) => {

    const { name, value } = inputTag
    console.log(name, value);

    // console.log(!!value.match(/^[a-zA-Z ]{3,16}$/));
    // console.log(!!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    // console.log(!!value.match(/^.{6,16}$/));
    
    if (name == "username") {
      const usernameRegex = /^[a-zA-Z ]{3,16}$/;
      setUserDetails({...userDetails,username:value})
      if(!usernameRegex.test(value)){
        setInvalidUsername(true);
      }
      else{
        setInvalidUsername(false);
      }
    }

    if (name == "email"){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setInvalidEmail({...userDetails,email:value})
      if(!emailRegex.test(value)){
        setInvalidEmail(true);
      }
      else{
        setInvalidEmail(false);
      }
    }

    if (name == "password"){
      const pswdRegex = /^.{6,16}$/
      setInvalidEmail({...userDetails,password:value})
      if(pswdRegex.test(value)){
        setInvalidPassword(true);
      }
      else{
        setInvalidPassword(false);
      }
    }
  }

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(/bg-hero.webp)] bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center">BOOK STORE</h1>
          <div className="bg-black text-white p-5 flex flex-col justify-center items-center my-5 " style={{ width: '400px' }} >
            {/* Logo */}
            <div className="border mb-5 flex justify-center items-center" style={{ width: '100px', height: '100px', borderRadius: '50%' }} >
              <BiUser className='text-4xl' />
            </div>
            {/* Form title */}
            <h1 className="text-2xl">{registerURL ? "Register" : "Login"} </h1>
            <form className="my-5 w-full ">
              {/* Username - Register */}
              {
                registerURL &&
                <>
                  <input onChange={(e) => validateInputs(e.target)} placeholder="Username*" name='username' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type="text" />
                  {invalidUsername && <div className='text-yellow-500 mt-1 text-sm'>*Invalid User name</div>}
                </>
              }
              {/* Email */}
              <input onChange={(e) => validateInputs(e.target)} placeholder="Email address*" name='email' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type="text" />
              {invalidEmail && <div className='text-yellow-500 mt-1 text-sm'>*Invalid Email</div>}

              {/* Password */}
              <div className="flex items-center">
                <input onChange={(e) => validateInputs(e.target)} placeholder="Password*" name='password' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type={viewPassword ? 'text' : 'password'} />
                {
                  viewPassword ?
                    <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-500' style={{ marginLeft: '-30px', marginTop : '20px' }} size={20} />
                    :
                    <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-500' style={{ marginLeft: '-30px', marginTop : '20px' }} size={20} />
                }
              </div>
              {invalidPassword && <div className='text-yellow-500 mt-1 text-sm'>*Invalid Password</div>}
              {/* Forgot password */}
              {
                !registerURL &&
                <div className="flex justify-between mt-5">
                  <p className="text-xs text-orange-300">*Never share your password with orthers</p>
                  <button className="text-xs underline cursor-pointer hover:text-orange-300 transition">Forgot Password?</button>
                </div>
              }
              {/* Register or login button */}
              <div className="text-center mt-5">
                {
                  registerURL ?
                    <button type="button" className="bg-green-700 p-2 w-full rounded hover:bg-green-800 transition cursor-pointer">Register</button>
                    :
                    <button type="button" className="bg-green-700 p-2 w-full rounded hover:bg-green-800 transition cursor-pointer">Login</button>
                }

              </div>
              {/* Google authentication */}
              {/* <div className="my-5 text-center">
                <p>----------------or----------------</p>
                <div className="my-5 flex justify-center w-full">
                  <div style={{ height: "40px" }} >

                  </div>
                </div>
              </div> */}

              {/* Have an account or not */}
              <div className="my-5 text-center">
                {
                  registerURL ?
                    <p className="text-blue-600">Already a user?  <Link className="underline ms-5 " to={'/login'} data-discover="true">Login</Link></p>
                    :
                    <p className="text-blue-600">Are you a New User? <Link className="underline ms-5 " to={'/register'} data-discover="true">Register</Link></p>
                }
              </div>
            </form>
          </div>
        </div>
        <section className="Toastify" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications Alt+T"></section>
      </div>

    </>
  )
}

export default Auth