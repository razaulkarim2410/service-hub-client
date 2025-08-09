import React from "react";

const HelpDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-cyan-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl bg-white rounded-xl shadow-lg p-12 space-y-10">
        <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-6">
          How to Get Our Service
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center">
          We strive to make getting the service you need as simple and convenient as possible. Follow the steps below to book your preferred service with confidence and ease.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-cyan-600 mb-3">Step 1: Choose Your Service</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Browse our wide range of trusted home and emergency services. Whether it's AC repair, plumbing, cleaning, or ambulance services, select the one that fits your needs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-cyan-600 mb-3">Step 2: Book Online</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Click the “Book Now” button available on the service detail page. Fill out the booking form with your contact information, preferred date and time, and any special instructions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-cyan-600 mb-3">Step 3: Receive Confirmation</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Once submitted, you will receive a booking confirmation via email or SMS with the details and estimated arrival time of our professional.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-cyan-600 mb-3">Step 4: Service Delivery</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Our verified and experienced professionals will arrive promptly at your location to deliver the service with the highest quality and care.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-cyan-600 mb-3">Step 5: Provide Feedback</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              After service completion, you’ll be invited to share your feedback and rate your experience. This helps us maintain excellent standards and serve you better.
            </p>
          </div>
        </section>

        <section className="bg-pink-50 p-6 rounded-lg border border-pink-300 max-w-3xl mx-auto text-center mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-pink-600">Why Choose Us?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Experienced, verified professionals</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>24/7 customer support and emergency services</li>
            <li>Easy online booking & fast confirmation</li>
            <li>Dedicated to your comfort and satisfaction</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HelpDetail;
