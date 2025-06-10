import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import img from '../../assets/icons8-user-100 (2).png'

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

    {user && (
        <li tabIndex={0}>
          <details>
            <summary>Dashboard</summary>
            <ul className="p-2 bg-base-200 rounded-t-none z-10 space-y-2 ">
              <li><NavLink to="/dashboard/add-service">Add Service</NavLink></li>
              <li><NavLink to="/dashboard/manage-service">Manage Service</NavLink></li>
              <li><NavLink to="/dashboard/booked-services">Booked-Services</NavLink></li>
              <li><NavLink to="/dashboard/service-to-do">Service-To-Do</NavLink></li>
            </ul>
          </details>
        </li>
      )}

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
        <div className="relative group">
          <img
            className='w-10 h-10 rounded-full cursor-pointer'
            src={user?.photoURL || img}
            alt="User Avatar"
          />
          {user?.displayName && (
            <div className="absolute left-0 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {user.displayName}
            </div>
          )}
        </div>
         {user ? <button onClick={handleLogout} className='btn'>LogOut</button> : <>
         <NavLink to={'/login'} className="btn">LogIn</NavLink>
         </>}
      </div>
    </div>
  );
};

export default NavBar;