import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      setLoading(true);
      fetch(`https://service-hub-server.vercel.app/bookings?userEmail=${user.email}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch bookings');
          return res.json();
        })
        .then(data => {
          setBookings(data);
          setError("");
          setLoading(false);
        })
        .catch(err => {
          setError(err.message || "Error fetching bookings");
          setLoading(false);
        });
    }
  }, [user?.email, user?.accessToken]);

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="w-11/12 mx-auto md:p-5 md:mt-16">
      <Helmet>
        <title>My Booked Services</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-pink-700 dark:text-pink-400 mb-8 text-center">
        My Booked Services
      </h2>

      {loading ? (
        <p className="text-center text-gray-700 dark:text-gray-300">Loading bookings...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-700 dark:text-gray-300">No booked services yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 border rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={booking.serviceImage}
                alt={booking.serviceName}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-xl text-pink-700 dark:text-pink-400 font-semibold">
                {booking.serviceName}
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Provider:</strong> {booking.providerName}
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Price:</strong> ${booking.price}
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Date:</strong> {booking.date}
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Status:</strong>{' '}
                <span className="text-pink-700 dark:text-pink-400">{booking.serviceStatus}</span>
              </p>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                <strong>Instruction:</strong> {booking.specialInstruction}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
