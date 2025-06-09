import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const NavBar = () => {

  const{user, logOut}= use(AuthContext)

   const handleLogout = () => {
    console.log('user try to logout')
    logOut().then(() => {
      Swal.fire({
        title: "You LogOut Successfully",
        icon: "success",
        draggable: true
      });
    }).catch((error) => {
      console.log(error)
    });
  }

  const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/service'}>Service</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        
        <h2 style={{ color: 'purple' }} className='text-3xl font-bold'>Service<span style={{ color: 'green' }}>Hub</span></h2>
      
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
         {user ? <button onClick={handleLogout} className='btn'>LogOut</button> : <>
         <NavLink to={'/login'} className="btn">LogIn</NavLink>
         </>}
      </div>
    </div>
  );
};

export default NavBar;