import React from 'react';
import error from '../../assets/warning-8908707_1280 (1).png'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='gap-10 py-10 items-center flex flex-col'>
      <h2 className='font-bold text-7xl py-10 text-red-800'>Page Not Found</h2>
      <h2 className='font-bold text-5xl'>Error Page 404</h2>
      <img className='h-[500px]' src={error} alt="" />
      <Link className='btn btn-primary' to={'/'}>Back To Home</Link>
    </div>
  );
};

export default ErrorPage;