import React from 'react';
import error from '../../assets/warning-8908707_1280 (1).png'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
  return (
    <div className='gap-10 py-10 items-center flex flex-col'>
       <Helmet>
        <title>Error Page</title>
      </Helmet>
      <h2 className='font-bold text-7xl py-10 text-red-800'>Page Not Found</h2>
      <h2 className='font-bold text-5xl'>Error Page 404</h2>
      <img className='h-[500px]' src={error} alt="" />
      <Link className='btn btn-outline btn-secondary px-20' to={'/'}>Back To Home</Link>
    </div>
  );
};

export default ErrorPage;