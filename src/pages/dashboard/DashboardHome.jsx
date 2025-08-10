import React from "react";
import { motion } from "framer-motion";

const DashboardHome = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-700 md:pt-22  text-center mb-6">
        Welcome to ServiceHub Dashboard
      </h1>
      <p className="text-lg mb-8 text-gray-700 text-center max-w-2xl mx-auto">
        Manage your services, bookings, and daily tasks—all in one easy dashboard.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
        {[
          {
            title: "Add Service",
            description:
              "Easily add new services with detailed descriptions, pricing, and availability to attract more customers.",
          },
          {
            title: "Manage Service",
            description:
              "Edit or remove your existing services anytime to keep your offerings accurate and up to date for customers.",
          },
          {
            title: "Booked Services",
            description:
              "View and manage all your customer bookings easily, so you never miss appointments and stay organized.",
          },
          {
            title: "Service To-Do",
            description:
              "Track your service tasks and update their status to ensure smooth workflow and keep customers informed.",
          },
        ].map(({ title, description }) => (
          <motion.div
            key={title}
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-pointer min-h-[170px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-center text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
