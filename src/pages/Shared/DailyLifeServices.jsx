import React from "react";

const DailyLifeServices = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-cyan-100 px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-pink-600">
        Simplify Your Daily Life
      </h1>
      <p className="max-w-xl text-gray-700 text-lg mb-12 leading-relaxed">
        Managing chores has never been easier. Book services like plumbing, pest control, or ambulance instantly—saving you time and stress. With just a few taps, get expert help delivered right to your door.
      </p>

      <div className="flex gap-16 justify-center">
        {/* Plumbing Icon */}
        <div className="flex flex-col items-center text-pink-600">
          <svg
            className="w-16 h-16 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span className="font-semibold text-xl">Plumbing</span>
        </div>

        {/* Pest Control Icon */}
        <div className="flex flex-col items-center text-pink-600">
          <svg
            className="w-16 h-16 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 17l4-4-4-4m5 8h3m-3-8h3m-3 4h3"
            ></path>
          </svg>
          <span className="font-semibold text-xl">Pest Control</span>
        </div>

        {/* Ambulance Icon */}
        <div className="flex flex-col items-center text-pink-600">
          <svg
            className="w-16 h-16 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h2l2 5 4-9 5 4-1 3 3 3v4H3v-6z"
            ></path>
          </svg>
          <span className="font-semibold text-xl">Ambulance</span>
        </div>
      </div>
    </div>
  );
};

export default DailyLifeServices;
