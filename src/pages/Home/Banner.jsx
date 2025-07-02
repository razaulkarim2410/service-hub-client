// import React from 'react';
// import { motion } from "motion/react"
// import banner1 from '../../assets/pexels-mart-production-7709255.jpg'
// import banner2 from '../../assets/pexels-olly-853151.jpg'
// import SearchBar from '../../component/SearchBar';

// const Banner = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
      
//   <div className="hero-content flex-col lg:flex-row-reverse">
    
//     <div className='flex-1'>
//       <motion.img
//       src={banner1}
//       animate={{y: [100, 150, 100]}}
//       transition= {{duration: 5, repeat: Infinity}}
//       className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
//     />
//       <motion.img
//       src={banner2}
//       animate={{x: [-100,30,-100]}}
//       transition= {{duration: 10, repeat: Infinity}}
//       className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-10 border-b-10 border-blue-500 shadow-2xl"
//     />
//     </div>
//     <div className='flex-1'>
//       <motion.h1 
//       initial={{ scale: 0 }} animate={{ scale: 1, transition:{duration: 4} }}
//        className="text-5xl font-bold">Your <motion.span animate={{color: ['#6c0f85','#089129','#914808'],transition: {duration: 2, repeat: Infinity} }}>Reliable </motion.span> Assistant</motion.h1>
//       <p className="py-6">
//         Fast, Trusted Solutions for Home, Beauty, Emergency & Electrical Services.All-in-One Service Platform for Repairs, Care, and Daily Essentials.
//       </p>
//       <button className="btn btn-outline btn-secondary">Get Started</button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Banner;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../assets/pexels-olly-853151.jpg'
import image2 from '../../assets/pexels-kampus-8439766.jpg'
import image3 from '../../assets/pexels-jeswin-1619572.jpg'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className=' w-11/12 mx-auto pt-10'>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14  bg-cover bg-center"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-start">
              <h1 className="mb-5 text-4xl font-bold">Chose Your Perfect Plan</h1>
              <p className="mb-5 font-bold">
               Explore a variety of reliable home and emergency services tailored to your needs. Whether it’s AC repair, car rental, or cleaning – pick the service that fits your lifestyle and budget.
              </p>
              <button className="btn   bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">Get Help When You Need </h1>
              <p className="mb-5 font-bold">
                From urgent repairs to routine cleaning, our trusted professionals are just a tap away. Enjoy fast, reliable service anytime, anywhere.Your comfort and convenience are always our top priority
              </p>
              <button className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image3})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-end">
              <h1 className="mb-5 text-4xl font-bold">Simplify Your Daily Life</h1>
              <p className="mb-5 font-bold">
               Managing chores has never been easier. Book services like plumbing, pest control, or ambulance instantly—saving you time and stress.With just a few taps, get expert help delivered right to your door.
              </p>
              <button className="btn  bg-pink-700 text-white hover:bg-white hover:text-pink-700">Get Started</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;