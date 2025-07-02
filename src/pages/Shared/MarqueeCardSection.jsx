import React from 'react';
import Marquee from 'react-fast-marquee';

const services = [
  {
    id: 1,
    title: "AC Repair",
    image: "https://i.ibb.co/Ps4Q8GT2/pexels-zechen-li-187261660-14522790.jpg",
    desc: "Fast and reliable air conditioning repair services at your doorstep.",
  },
  {
    id: 2,
    title: "Ambulance Service",
    image: "https://i.ibb.co/XZDMmddr/pexels-rdne-6520084.jpg",
    desc: "Emergency ambulance service available 24/7 across the city.",
  },
  {
    id: 3,
    title: "Car Rental",
    image: "https://i.ibb.co/9HYwM9DT/pexels-mikebirdy-170811.jpg",
    desc: "Affordable and flexible car rental solutions for any journey.",
  },
  {
    id: 4,
    title: "Home Cleaning",
    image: "https://i.ibb.co/2YpSgdy0/pexels-polina-tankilevitch-4440529.jpg",
    desc: "Deep and regular cleaning by verified professionals.",
  },
  {
    id: 5,
    title: "Electric Repair",
    image: "https://i.ibb.co/PZvMdDwC/pexels-pixabay-257736-1.jpg",
    desc: "Expert electricians for all household and office electrical needs.",
  },
  {
    id: 6,
    title: "Plumbing Service",
    image: "https://i.ibb.co/vvzVHZw3/pexels-curtis-adams-1694007-3288104.jpg",
    desc: "Leaky taps or clogged pipes? We’ve got you covered.",
  },
  {
    id: 7,
    title: "Pest Control",
    image: "https://i.ibb.co/xqcfM0t5/pexels-jerseypics-1046492.jpg",
    desc: "Safe and effective pest control services for a healthy home.",
  },
  {
    id: 8,
    title: "Computer Repair",
    image: "https://i.ibb.co/Q7X1Fpkq/pexels-joshsorenson-1714208.jpg",
    desc: "Professional repair for laptops, desktops, and accessories.",
  },
];

const MarqueeCardSection = () => {
  return (
    <div className="py-6 bg-pink-50  rounded-xl w-11/12 mx-auto">
      <h2  className="text-4xl font-bold text-center mb-3 text-pink-700">
         Explore Our Popular Services
      </h2>
      <p className="text-center  mb-6 max-w-2xl mx-auto">
        We provide a wide range of trusted home and emergency services, just a click away!
      </p>

      <Marquee direction="left" speed={40} gradient={true} gradientWidth={0}>
        {services.map((service) => (
          <div
            key={service.id}
            className="border-2 border-pink-300 shadow-md rounded-xl m-4 p-4 w-64 bg-white hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-pink-700">{service.title}</h3>
            <p className="text-sm  mt-1">{service.desc}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCardSection;
