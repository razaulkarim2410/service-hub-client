import React from "react";

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold pt-16 mb-6 ">Support</h1>

      <p className="mb-6 ">
        Welcome to the ServiceHub Support Center. We’re here to help you with any
        questions, issues, or feedback you may have. Please browse our
        frequently asked questions, or get in touch with our team for
        personalized assistance.
      </p>

      {/* Contact Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 ">
          Contact Our Support Team
        </h2>
        <p className="mb-4 ">
          You can reach our support team via email or live chat for any help
          regarding bookings, services, payments, or account settings.
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>Email: <a href="mailto:support@servicehub.com" className="text-cyan-600 hover:underline">support@servicehub.com</a></li>
          <li>Live Chat: Available in the bottom-right corner of the site (9 AM – 6 PM)</li>
          <li>Phone: +880 1234 567 890</li>
        </ul>
      </section>




      {/* Report an Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 ">
          Report an Issue
        </h2>
        <p className="mb-4 ">
          If you encounter a problem while using ServiceHub, please let us know so
          we can address it quickly.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows="4"
            placeholder="Describe your issue..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Support;
