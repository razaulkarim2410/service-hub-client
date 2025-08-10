import React from 'react';
import aboutImage from '../../assets/pexels-olly-853151.jpg'; 

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-pink-700">About Us</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2  leading-relaxed space-y-6">
          <p>
            ServiceHub is a full-service marketplace connecting customers with trusted service providers across various categories.
            We strive to deliver exceptional user experience through a secure, easy-to-use platform.
          </p>
          <p>
            Our mission is to empower service providers and customers by simplifying the booking and management process.
            Whether you need home repairs, personal training, tutoring, or more, we connect you with verified professionals ready to help.
          </p>
          <p>
            We believe in quality, reliability, and transparency. Our platform supports both users and providers with tools and support that make service management effortless and effective.
          </p>
          <p>
            Join ServiceHub today and experience seamless service discovery and booking like never before.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About ServiceHub"
            className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
