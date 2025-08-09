import React from "react";
import image1 from "../../assets/pexels-jeswin-1619572.jpg";

const services = [
  { name: "AC Repair", desc: "Professional air conditioning repair and maintenance to keep you cool all year." },
  { name: "Car Rental", desc: "Affordable and reliable rental cars for daily or long-term use." },
  { name: "House Cleaning", desc: "Deep cleaning services to keep your home sparkling and fresh." },
  { name: "Plumbing", desc: "Expert plumbers for leak repairs, installations, and maintenance." },
  { name: "Electrician", desc: "Certified electricians to fix wiring, lighting, and electrical issues." },
  { name: "Pest Control", desc: "Safe and effective pest removal to protect your home." },
  { name: "Gardening", desc: "Professional garden maintenance and landscaping services." },
  { name: "Home Painting", desc: "Interior and exterior painting to give your home a fresh look." },
  { name: "Carpentry", desc: "Custom furniture, repairs, and woodwork by skilled carpenters." },
  { name: "Appliance Repair", desc: "Fixing washing machines, fridges, ovens, and other appliances." },
  { name: "Moving Service", desc: "Safe and hassle-free home and office moving assistance." },
  { name: "Ambulance Service", desc: "24/7 emergency ambulance for urgent medical needs." },
];

const ServicePlanDetails = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      {/* Banner Image */}
      <img cl src={image1} alt="Service Plan" className="rounded-xl w-full object-cover h-[300px] lg:mt-12 mt-24 mb-6 shadow-lg" />

      {/* Title & Intro */}
      <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
      <p className="mb-6 text-lg text-gray-700">
        We offer a wide range of reliable home and emergency services to suit
        every lifestyle. Whether you need AC repair, car rental, or cleaning,
        we have the right plan for you. Our mission is to make your life easier
        by connecting you with trusted professionals who deliver exceptional
        results every time.
      </p>

      {/* Services Section */}
      <h2 className="text-3xl font-bold mb-6">Our Best Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-xl hover:border-pink-500 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-inner  mx-auto flex flex-col items-center text-center  mt-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li>Verified professionals with years of experience</li>
          <li>Affordable plans for every budget</li>
          <li>24/7 availability for urgent needs</li>
          <li>Easy booking through our website or mobile app</li>
          <li>High customer satisfaction rate</li>
          <li>Fully insured services for your peace of mind</li>
          <li>Use of high-quality tools and materials</li>
          <li>Dedicated customer support team</li>
        </ul>
      </section>

    </div>
  );
};

export default ServicePlanDetails;
