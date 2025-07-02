import React from 'react';
import { motion } from "motion/react"

const WhyUs = () => {
  return (

    <div className='py-10 mt-5  justify-center items-center w-11/12 mx-auto'>
      <p className='text-bold  text-xl'>.........Why Choose US</p>
      <h2 className='text-4xl font-bold text-pink-700 mb-6'>Because we care about your safety.....</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>

        <div className='grid grid-cols-2'>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='w-[220px] rounded-r-[20px] rounded-bl-[40px] border-s-8 border-t-8 text-pink-700 shadow-4xl ' src="https://i.ibb.co/cXk3LSPH/pexels-shvetsa-3902881.jpg" alt="" />
            <h2 className='p-3 text-2xl font-bold '>Ensuring
              Masks</h2>
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='w-[220px] rounded-r-[20px] rounded-bl-[40px] border-s-8 border-t-8 text-pink-700 shadow-2xl ' src="https://i.ibb.co/bMxXGGyt/pexels-mart-production-7709255.jpg" alt="" />
            <h2 className='p-3 text-2xl font-bold  '>24/7
              Support</h2>
          </div>
          <div>

            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='w-[220px] rounded-r-[20px] rounded-bl-[40px] border-s-8 border-t-8 text-pink-700 shadow-2xl ' src="https://i.ibb.co/Nd3SFZtL/pexels-tima-miroshnichenko-6612168.jpg" alt="" />
            <h2 className='p-3 text-2xl font-bold  '>
              Sanitising Equipment</h2>
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='w-[220px] rounded-r-[20px] rounded-bl-[40px] border-s-8 border-t-8 text-pink-700 shadow-2xl ' src="https://i.ibb.co/v9LK3DR/pexels-polina-tankilevitch-4440529.jpg" alt="" />
            <h2 className='p-3 text-2xl font-bold  '>Ensuring
              Gloves</h2>
          </div>

        </div>
        <div className=''>
          <img className='rounded-xl w-[630px]' src="https://i.ibb.co/Fqh04ZFf/pexels-fauxels-3184291.jpg" alt="" />
          <h2 className='text-4xl font-bold  text-center pt-2'>Trust in all our services.</h2>
        </div>
      </div>
    </div>

  );
};

export default WhyUs;