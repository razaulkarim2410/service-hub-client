import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

  const { createUser, setUser, updateUser } = use(AuthContext)
  const [name, setName] = useState()


  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
         Swal.fire({
          title: "You Register Successfully !",
          icon: "success",
          draggable: true
        });
      })
      .catch(error => {
        console.log(error)

      })
  }

  const handleRegister = e => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();

    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    console.log({ name, photo, email, password })
    createUser(email, password)
      .then((result) => {
        const user = result.user
        // console.log(user)
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
            setUser(user)
          })

        Swal.fire({
          title: "You Register Successfully !",
          icon: "success",
          draggable: true
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  }
  return (
    <div className='flex justify-center items-center min-h-screen pt-12'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h2 className='text-2xl font-bold text-center py-4'>Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">

          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" required name='name' className="input" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input type="text" required name='photo' className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" required name='email' className="input" placeholder="Email" />

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
                className='absolute btn btn-xs top-2 right-6'
              >
                <FaEye />
              </button>
            </div>

            <button type='submit' className="btn btn-neutral mt-4">Register</button>


            <button
              type='button'
              onClick={handleGoogleSignIn}
              className="btn mt-4 text-xl font-bold flex items-center gap-2"
            >
              <FcGoogle /> Sign in With Google
            </button>
            <p className='text-l font-bold pt-5'>Already Have an Account ?{" "} <Link className='underline font-bold ' to={'/login'}>LogIn</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;