import React from 'react';
import img from "../../assets/pexels-fauxels-3184432.jpg"

const Discover = () => {
  return (
    <div className=' mx-auto'>
      <div
        className="hero h-200px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Chose Your Perfect Plan</h1>
            <p className="mb-5">
              Choose the perfect plan that matches your needs and budget, with flexible options from trusted providers—customized for any job, big or small, to fit your lifestyle and deliver satisfying results.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Discover;