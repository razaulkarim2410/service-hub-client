import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"



const AllServices = ({ addService }) => {
  const {
    imageUrl,
    serviceName,
    price,
    serviceArea,
    description,
    providerName,
    providerImage
  } = addService;

  return (
    <div
      
      className="bg-base-200 w-11/12 mx-auto rounded-xl mb-5 p-3">
      <motion.img 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
      src={imageUrl} alt="Service" className="rounded-xl h-[170px] w-full object-cover mb-3" />
      <h2 className="text-xl font-bold text-pink-700">Service: {serviceName}</h2>
      <p>{description.slice(0, 100)}</p>
      <p>Area: {serviceArea}</p>
      <p>Price: ${price}</p>
      <div className="flex items-center gap-2 mt-2">
        <img src={providerImage} alt="Provider" className="w-8 h-8 rounded-full" />
        <p>{providerName}</p>
      </div>
      <div className="text-center mt-3">
        <Link to={`/services/${addService._id}`} className="btn btn-outline btn-secondary btn-block font-bold">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
