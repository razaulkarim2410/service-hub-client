import React from 'react';

import AllServices from '../allServices/AllServices';
;
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';

const AllServicesPage = () => {
  const allServices = useLoaderData();

  return (
    <div className="p-5 w-11/12 mx-auto mt-28">
      <Helmet><title>All Services</title></Helmet>
      <h2 className="text-4xl text-center font-bold text-pink-700  mb-8">All Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allServices.map(service => (
          <AllServices key={service._id} addService={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServicesPage;
