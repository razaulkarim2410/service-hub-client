import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';
import Loading from '../pages/loading/Loading';

const RootLayout = () => {
  const {state} = useNavigate()
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      {state =="loading"? <Loading/> : <Outlet></Outlet> }
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;