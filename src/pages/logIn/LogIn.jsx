import React, { use, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';


const LogIn = () => {

  const { logInUser, setUser } = use(AuthContext)
  const [ setError] = useState(" ")
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "You Logged In Successfully!",
          icon: "success",
          draggable: true
        });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };


  const emailRef = useRef()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log({ email, password })
    logInUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(`${location.state ? location.state : "/"}`)
        Swal.fire({
          title: "You Login Successfully!",
          icon: "success",
          draggable: true
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage)
        setError(errorCode)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Enter Valid Password!",
          footer: '<a href="#">Please Fix It?</a>'
        });
      });
  }
  return (
    <div className="hero bg-base-200 min-h-screen pt-28">
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">


        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />

                <label className="label text-xs font-bold">Password</label>
                <div className='relative'>
                  <input
                    name='password'

                    type={showPassword ? 'text' : 'password'}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute top-3 right-4'
                  >
                    <FaEye size={20}/>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn mt-4 text-xl font-bold flex items-center gap-2"
                >
                  <FcGoogle /> Sign in With Google
                </button>
                
                <button type='submit' className="btn btn-neutral mt-4">LogIn</button>
                <p className='text-l font-bold pt-5'>Don't Have an Account ? {" "} <NavLink className='underline  text-pink-700' to={'/register'}>Register</NavLink></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;