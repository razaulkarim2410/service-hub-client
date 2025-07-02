import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Khan",
    title: "Homeowner",
    avatar: "https://i.ibb.co/ksLDRkxp/pexels-heitorverdifotos-2169427.jpg",
    message: "Amazing service! They arrived on time and fixed my AC quickly. Very professional and friendly team.",
    rating: 5
  },
  {
    id: 2,
    name: "John Doe",
    title: "Entrepreneur",
    avatar: "https://i.ibb.co/s9HwqdJX/pexels-tima-miroshnichenko-7206418.jpg",
    message: "Great car rental experience. Clean cars, fair pricing. Will rent again soon!",
    rating: 4
  },
  {
    id: 3,
    name: "Fatima Begum",
    title: "Nurse",
    avatar: "https://i.ibb.co/bMnttbsp/pexels-shkrabaanthony-7342620.jpg",
    message: "Emergency ambulance came super fast and handled everything professionally. Very thankful!",
    rating: 5
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    title: "Freelancer",
    avatar: "https://i.ibb.co/v6QZDwyk/pexels-nayletcg-999248.jpg",
    message: "House was sparkling clean! They did an excellent job even in tough corners.",
    rating: 4
  },
  {
    id: 5,
    name: "Ayesha Rahman",
    title: "Teacher",
    avatar: "https://i.ibb.co/bMnttbsp/pexels-shkrabaanthony-7342620.jpg",
    message: "The pest control was effective and non-toxic. Good value for money.",
    rating: 5
  },
  {
    id: 6,
    name: "Rafiq Ahmed",
    title: "IT Specialist",
    avatar: "https://i.ibb.co/s9HwqdJX/pexels-tima-miroshnichenko-7206418.jpg",
    message: "Computer repair was done in a day. My laptop feels brand new!",
    rating: 5
  },
  {
    id: 7,
    name: "Lubna Sultana",
    title: "Artist",
    avatar: "https://i.ibb.co/bMnttbsp/pexels-shkrabaanthony-7342620.jpg",
    message: "Very polite workers and great service. Highly recommend this platform.",
    rating: 4
  },
  {
    id: 8,
    name: "Mehedi Hasan",
    title: "Photographer",
    avatar: "https://i.ibb.co/nMZpBQX5/pexels-olly-3777948.jpg",
    message: "Quick fix for my electric problems. Courteous technician and affordable rate.",
    rating: 5
  },
  {
    id: 9,
    name: "Nadia Islam",
    title: "Fashion Blogger",
    avatar: "https://i.ibb.co/ksLDRkxp/pexels-heitorverdifotos-2169427.jpg",
    message: "Car was delivered to my home. Hassle-free and smooth experience.",
    rating: 4
  },
  {
    id: 10,
    name: "Arif Chowdhury",
    title: "Engineer",
    avatar: "https://i.ibb.co/nMZpBQX5/pexels-olly-3777948.jpg",
    message: "Efficient AC servicing and great customer care. 5 stars from me!",
    rating: 5
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2 ">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 mr-1 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118l-3.356-2.44a1 1 0 00-1.176 0l-3.356 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.08 9.37c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.943z" />
        </svg>
      ))}
    </div>
  );
};

const ClientReviewCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleIndexes = () => {
    const center = current;
    const left = (current - 1 + reviews.length) % reviews.length;
    const right = (current + 1) % reviews.length;
    return [left, center, right];
  };

  return (
    <div className="relative overflow-hidden py-10 bg-pink-50 w-11/12 mx-auto rounded-xl">
      <h2 className="text-center text-4xl font-bold text-pink-600 mb-6"> What Our Clients Say</h2>
      <div className="flex items-center justify-center gap-4 px-2 sm:px-10">
        {getVisibleIndexes().map((i, index) => {
          const isCenter = i === current;

          return (
            <motion.div
              key={reviews[i].id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isCenter ? 1 : 0.85 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-white p-5 rounded-xl shadow-lg w-[280px] sm:w-[300px] transition-all duration-300 ${
                isCenter ? "z-10" : "opacity-60"
              }`}
              style={{
                transform: isCenter ? "translateX(0)" : index === 0 ? "translateX(-40%)" : "translateX(40%)",
                zIndex: isCenter ? 10 : 5,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={reviews[i].avatar}
                  alt={reviews[i].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-pink-700 text-sm">{reviews[i].name}</h4>
                  <p className="text-xs text-pink-400">{reviews[i].title}</p>
                </div>
              </div>

              <p className="italic text-sm text-gray-600 mb-2">
                <span className="text-xl text-pink-400 leading-none">“</span>
                {reviews[i].message}
                <span className="text-xl text-pink-400 leading-none">”</span>
              </p>

              <StarRating rating={reviews[i].rating} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientReviewCarousel;
