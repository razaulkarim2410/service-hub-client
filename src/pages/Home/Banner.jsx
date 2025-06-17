import React from 'react';
import { motion } from "motion/react"
import banner1 from '../../assets/pexels-mart-production-7709255.jpg'
import banner2 from '../../assets/pexels-olly-853151.jpg'
import SearchBar from '../../component/SearchBar';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className='flex-1'>
      <motion.img
      src={banner1}
      animate={{y: [100, 150, 100]}}
      transition= {{duration: 5, repeat: Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
    />
      <motion.img
      src={banner2}
      animate={{x: [-100,30,-100]}}
      transition= {{duration: 10, repeat: Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <motion.h1 
      initial={{ scale: 0 }} animate={{ scale: 1, transition:{duration: 4} }}
       className="text-5xl font-bold">Your <motion.span animate={{color: ['#6c0f85','#089129','#914808'],transition: {duration: 2, repeat: Infinity} }}>Reliable </motion.span> Assistant</motion.h1>
      <p className="py-6">
        Fast, Trusted Solutions for Home, Beauty, Emergency & Electrical Services.All-in-One Service Platform for Repairs, Care, and Daily Essentials.
      </p>
      <button className="btn btn-outline btn-secondary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;