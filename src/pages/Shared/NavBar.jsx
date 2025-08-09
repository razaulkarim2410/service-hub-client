import React, { useContext, useEffect, useState, useRef } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Close menu on outside click or hover outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    function handleMouseLeave(event) {
      // Close menu when mouse leaves the dropdown container
      if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    // Attach mouseleave listener directly to menu container
    const menuCurrent = menuRef.current;
    if (menuCurrent) {
      menuCurrent.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (menuCurrent) {
        menuCurrent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);


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
          title: 'Logged Out Successfully',
          icon: 'success',
        });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2  cursor-pointer ${isActive ? 'text-pink-700 font-bold' : 'text-gray-700'} transition-colors`;

  const links = (
    <>
      <li>
        <NavLink
          className={navLinkClass}
          to="/"
          onClick={() => setIsMenuOpen(false)} // close menu on click
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navLinkClass}
          to="/all-services"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className={navLinkClass} to="/about-us" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
          <h2 className="text-2xl font-bold text-pink-700">
            Service<span className="text-pink-700">Hub</span>
          </h2>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">{links}</ul>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <SearchBar />
          <button
            onClick={toggleTheme}
            className="btn bg-pink-700 text-white hover:bg-pink-600"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user?.photoURL || img}
            alt="User Avatar"
          />
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-pink-700 text-white hover:bg-pink-600"
            >
              LogOut
            </button>
          ) : (
            <NavLink to="/login" className="btn bg-pink-700 text-white hover:bg-pink-600">
              LogIn
            </NavLink>
          )}
        </div>

        {/* Mobile Right Section */}
        <div className="lg:hidden flex items-center gap-2 ml-auto relative" ref={menuRef}>
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user?.photoURL || img}
            alt="User Avatar"
          />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="btn btn-ghost p-1 z-50"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <ul
              className="menu menu-sm dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-56 space-y-2 absolute right-0 top-full z-40"
              style={{ marginTop: '4px' }} // small gap to avoid overlap but not too big
            >
              {links}
              <li>
                <SearchBar />
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="btn bg-pink-700 text-white w-full"
                >
                  {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="btn bg-pink-700 text-white w-full"
                  >
                    LogOut
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn bg-pink-700 text-white w-full"
                  >
                    LogIn
                  </NavLink>
                </li>
              )}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default NavBar;
