import React from 'react';
import { Link } from 'react-router';


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
    <div className="bg-base-200 p-4 rounded-xl mb-5">
      <img src={imageUrl} alt="Service" className="rounded-xl h-52 w-full object-cover mb-3" />
      <h2 className="text-xl font-bold">Service: {serviceName}</h2>
      <p>{description.slice(0, 100)}...</p>
      <p>Area: {serviceArea}</p>
      <p>Price: ${price}</p>
      <div className="flex items-center gap-2 mt-2">
        <img src={providerImage} alt="Provider" className="w-8 h-8 rounded-full" />
        <p>{providerName}</p>
      </div>
      <div className="text-center mt-3">
        <Link to={`/services/${addService._id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
