import React, { useContext, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { routeGuardContext } from '../contextAPI/AuthContext'


function Auth({ registerURL }) {

  const { setAuthorisedUser } = useContext(routeGuardContext);

  const navigate = useNavigate();

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

    if (name == "username") {
      const usernameRegex = /^[a-zA-Z ]{3,16}$/;
      setUserDetails({ ...userDetails, username: value })
      if (!usernameRegex.test(value)) {
        setInvalidUsername(true);
      }
      else {
        setInvalidUsername(false);
      }
    }

    if (name == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setUserDetails({ ...userDetails, email: value })
      if (!emailRegex.test(value)) {
        setInvalidEmail(true);
      }
      else {
        setInvalidEmail(false);
      }
    }

    if (name == "password") {
      const pswdRegex = /^.{6,6}$/
      setUserDetails({ ...userDetails, password: value })
      if (pswdRegex.test(value)) {
        setInvalidPassword(true);
      }
      else {
        setInvalidPassword(false);
      }
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = userDetails;

    if (username && email && password) {
      console.log(username, email, password);

      // console.log("Ready for API call !");
      try {

        const result = await registerAPI(userDetails);
        console.log(result);

        //results in 200, 409, 500

        if (result.status == 200) {
          toast.success("Registered successfully !");
          setUserDetails({
            username: '',
            email: '',
            password: ''
          })
          navigate('/login');
        }
        else if (result.status == 409) {
          toast.warning(res.response.data.message);
          setUserDetails({
            username: '',
            email: '',
            password: ''
          })
          navigate('/login');
        }
        else {
          toast.error("Something went wrong. Please try again later !");
          setUserDetails({
            username: '',
            email: '',
            password: ''
          })
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      toast.warning("Please fill all the details !")
    }

  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = userDetails;

    if (email && password) {
      console.log(email, password);

      // console.log("Ready for API call !");
      try {

        const result = await loginAPI(userDetails);
        console.log(result);

        //results in 200, 404, 500

        if (result.status == 200) {
          toast.success("Logged in successfully !");
          sessionStorage.setItem("token", result.data.token);
          sessionStorage.setItem("user", JSON.stringify(result.data.user));

          setUserDetails({
            username: '',
            email: '',
            password: ''
          })

          //Authorised user set in AuthContext
          setAuthorisedUser(true);

          setTimeout(() => {
            if (result.data.user.role == 'admin') {
              navigate('/admin/home');
            }
            else {
              navigate('/');
            }
          }, 2500)
        }
        else if (result.status == 401 || result.status == 404) {
          toast.warning(res.response.data.message);
          setUserDetails({
            username: '',
            email: '',
            password: ''
          })
          navigate('/');
        }
        else {
          toast.error("Something went wrong. Please try again later !");
          setUserDetails({
            username: '',
            email: '',
            password: ''
          })
          console.log(result);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      toast.warning("Please fill all the details !")
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Inside Google login");
    // console.log(credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    console.log(decode.name, decode.email, decode.picture);

    const result = await googleLoginAPI({ username: decode.name, email: decode.email, password: 'googlepassword', picture: decode.picture, })
    if (result.status == 200) {
      toast.success("Login successful!!")
      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("user", JSON.stringify(result.data.user));

      //Authorised user set in AuthContext
      setAuthorisedUser(true);

      setTimeout(() => {
        if (result.data.user.role == 'admin') {
          navigate('/admin/home');
        }
        else {
          navigate('/');
        }
      }, 2500)
    }
    else {
      toast.error("Something went wrong. Please try again later !");
      console.log(result);
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
                  <input value={userDetails.username} onChange={(e) => validateInputs(e.target)} placeholder="Username*" name='username' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type="text" />
                  {invalidUsername && <div className='text-yellow-500 mt-1 text-sm'>*Invalid User name</div>}
                </>
              }
              {/* Email */}
              <input value={userDetails.email} onChange={(e) => validateInputs(e.target)} placeholder="Email address*" name='email' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type="text" />
              {invalidEmail && <div className='text-yellow-500 mt-1 text-sm'>*Invalid Email</div>}

              {/* Password */}
              <div className="flex items-center">
                <input value={userDetails.password} onChange={(e) => validateInputs(e.target)} placeholder="Password*" name='password' className="bg-white p-2 w-full rounded placeholder-gray-500 mt-5 text-black" type={viewPassword ? 'text' : 'password'} />
                {
                  viewPassword ?
                    <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-500' style={{ marginLeft: '-30px', marginTop: '20px' }} size={20} />
                    :
                    <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-500' style={{ marginLeft: '-30px', marginTop: '20px' }} size={20} />
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
                    <button onClick={handleRegister} disabled={invalidUsername || invalidEmail || invalidPassword} type="button" className="bg-green-700 p-2 w-full rounded hover:bg-green-800 transition cursor-pointer">Register</button>
                    :
                    <button onClick={handleLogin} disabled={invalidUsername || invalidEmail || invalidPassword} type="button" className="bg-green-700 p-2 w-full rounded hover:bg-green-800 transition cursor-pointer">Login</button>
                }

              </div>
              {/* Google authentication */}
              <div className="my-5 text-center">
                {
                  registerURL &&
                  <>
                    <p>----------------or----------------</p>
                    <div className="my-5 flex justify-center w-full">
                      <div style={{ height: "40px" }} >
                        <GoogleLogin
                          onSuccess={credentialResponse => {
                            handleGoogleLogin(credentialResponse)
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        />
                      </div>
                    </div>
                  </>
                }

              </div>

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

        <ToastContainer position="top-center" autoClose={3000} theme='colored' />

      </div>

    </>
  )
}

export default Auth