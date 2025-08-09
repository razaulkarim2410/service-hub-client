import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
// import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { FaSignOutAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire('Logged Out!', 'See you again.', 'success');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navItemClass = ({ isActive }) =>
    isActive
      ? 'bg-pink-700 text-white px-3 py-2 rounded'
      : 'px-3 py-2 hover:bg-pink-100 rounded';

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-gray-600">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Helmet>
        <title>Dashboard - ServiceHub</title>
      </Helmet>

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">ServiceHub</h2>
        <nav className="flex flex-col gap-3 flex-grow">
          <NavLink to="/" className={navItemClass} end>
            Home
          </NavLink>
          <NavLink to="/dashboard/add-service" className={navItemClass}>
            Add Service
          </NavLink>
          <NavLink to="/dashboard/manage-service" className={navItemClass}>
            Manage Service
          </NavLink>
          <NavLink to="/dashboard/booked-services" className={navItemClass}>
            Booked Services
          </NavLink>
          <NavLink to="/dashboard/service-to-do" className={navItemClass}>
            Service To-Do
          </NavLink>

          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
