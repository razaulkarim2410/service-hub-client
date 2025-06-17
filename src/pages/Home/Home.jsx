import React, { useEffect, useRef } from 'react';
import Banner from './Banner';

import AllServices from '../allServices/AllServices';
import { Link, useLoaderData } from 'react-router';
import WhyUs from './WhyUs';
import { Helmet } from 'react-helmet-async';
import ShowAll from '../showAll/ShowAll';
import { animate } from 'motion';
import Discover from './Discover';


const Home = () => {
  const addServices = useLoaderData();
  const topSixServices = addServices.slice(0, 6);

  const pageRef = useRef(null);

  // Animate the whole page on mount
  useEffect(() => {
    animate(pageRef.current, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8 });
  }, []);
  return (
    <div ref={pageRef}
      className="p-6"
      style={{ opacity: 0, transform: 'translateY(30px)' }}>
      <Helmet><title>Home</title></Helmet>
      <Banner />
      <h2 className="text-5xl font-bold text-purple-900 text-center my-6">Popular Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {topSixServices.map(service => (
          <AllServices key={service._id} addService={service} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/all-services" className="btn btn-outline btn-primary px-30 text-2xl font-bold">Show All</Link>

      </div>
      <WhyUs></WhyUs>
      <ShowAll></ShowAll>
      <Discover></Discover>
    </div>
  );
};

export default Home;
