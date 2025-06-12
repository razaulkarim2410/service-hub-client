import React from 'react';

import AllServices from '../allServices/AllServices';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';

const AllServicesPage = () => {
  const allServices = useLoaderData();

  return (
    <div className="p-5">
      <Helmet><title>All Services</title></Helmet>
      <h2 className="text-3xl text-center mb-8">All Services</h2>
      <div className="grid grid-cols-1 gap-6">
        {allServices.map(service => (
          <AllServices key={service._id} addService={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServicesPage;
