import React from 'react';


const ShowAll = () => {
  return (
    <div className='py-10 my-10 gap-5 text-center grid grid-cols-1 md:grid-cols-3 bg-base-300 w-11/12 mx-auto rounded-xl'>
      <div className='space-y-2'>
        <p className='text-5xl font-bold text-pink-700'>12,000 +</p>
        <p className='text-2xl font-bold'>Service Providers</p>
      </div>
      <div  className='space-y-2'>
        <p className='text-5xl font-bold text-pink-700'>1,50,000 +</p>
        <p className='text-2xl font-bold'>Order Served</p>
      </div>
      <div  className='space-y-2'>
        <p className='text-5xl font-bold text-pink-700'>90,000 +</p>
        <p className='text-2xl font-bold'>5 Star Received</p>
      </div>
    </div>
  );
};

export default ShowAll;