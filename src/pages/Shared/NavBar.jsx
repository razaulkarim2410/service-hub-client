import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import img from '../../assets/icons8-user-100 (2).png';
import logo from '../../assets/hub-icon.png';
import { NavLink, useNavigate } from 'react-router';
import SearchBar from '../../component/SearchBar';


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme and save
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'You LogOut Successfully',
          icon: 'success',
        });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink className="btn btn-outline btn-secondary" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="btn btn-outline btn-secondary mx-2" to="/all-services">
          Services
        </NavLink>
      </li>
      {user && (
        <li tabIndex={0}>
          <details>
            <summary className="btn btn-outline btn-secondary">Dashboard</summary>
            <ul className="p-2 bg-base-200 rounded-t-none z-10 space-y-2">
              <li>
                <NavLink className="btn btn-outline btn-primary" to="/dashboard/add-service">
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline btn-primary" to="/dashboard/manage-service">
                  Manage Service
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline btn-primary" to="/dashboard/booked-services">
                  Booked Services
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline btn-primary" to="/dashboard/service-to-do">
                  Service To-Do
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className='fixed top-0 left-0 right-0 z-50 ' >

      <div className='bg-base-100 shadow-sm w-full'>
        <div className="navbar w-11/12 mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-3">


          <div className="navbar-start w-full lg:w-auto justify-between items-center">
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5h14M3 10h14M3 15h14" clipRule="evenodd" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 z-50">
                {links}
              </ul>
            </div>



            <div className="flex items-center gap-2">
              <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
              <h2 className="text-2xl font-bold text-pink-700">
                Service<span className="text-pink-700">Hub</span>
              </h2>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end w-full lg:w-auto flex flex-wrap justify-center items-center gap-2 mt-2 lg:mt-0">
            <div className="hidden sm:block">
              <SearchBar></SearchBar>
            </div>

            {/* Theme Toggle Button */}
            <button className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>

            {/* User Avatar */}
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user?.photoURL || img} // `img` is your fallback default
                alt="User Avatar"
              />
              {user?.displayName && (
                <div className="absolute left-0 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {user.displayName}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            {user ? (
              <button onClick={handleLogout} className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">LogOut</button>
            ) : (
              <NavLink to="/login" className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">LogIn</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
