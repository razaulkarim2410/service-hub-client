import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';

import AllServices from '../allServices/AllServices';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
  const addServices = useLoaderData();
  const topSixServices = addServices.slice(0, 6);

  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      <Banner />
      <h2 className="text-2xl font-bold text-center my-6">Popular Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {topSixServices.map(service => (
          <AllServices key={service._id} addService={service} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/all-services" className="btn btn-outline btn-primary">Show All</Link>
      </div>
    </div>
  );
};

export default Home;
