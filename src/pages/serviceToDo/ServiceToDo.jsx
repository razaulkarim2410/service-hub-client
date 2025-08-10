import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      setLoading(true);
      fetch(`https://service-hub-server.vercel.app/booked-services/by-provider?email=${user.email}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch services');
          return res.json();
        })
        .then(data => {
          setBookings(Array.isArray(data) ? data : []);
          setError(null);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message || 'Failed to load your services. Please try again.');
          setBookings([]);
          setLoading(false);
        });
    }
  }, [user?.email, user?.accessToken]);

  const handleStatusChange = (bookingId, newStatus) => {
    fetch(`https://service-hub-server.vercel.app/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({ serviceStatus: newStatus }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to update status');
        return res.json();
      })
      .then(() => {
        setBookings(prev =>
          prev.map(b => (b._id === bookingId ? { ...b, serviceStatus: newStatus } : b))
        );
      })
      .catch(err => {
        // Optionally handle error updating status
        console.error('Update status error:', err);
      });
  };

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="w-11/12 mx-auto md:p-5 md:mt-16">
      <Helmet>
        <title>Services To Do</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-pink-700 dark:text-pink-400 text-center mb-8">
        Services To Do
      </h2>

      {loading && <p className="text-center text-gray-700 dark:text-gray-300">Loading services...</p>}

      {error && <p className="text-center text-red-500 mb-4">{error}</p>}

      {!loading && !error && bookings.length === 0 && (
        <p className="text-center text-gray-700 dark:text-gray-300">No services assigned to you yet.</p>
      )}

      {!loading && !error && bookings.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map(booking => (
            <div
              key={booking._id}
              className="border p-4 rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={booking.serviceImage}
                alt={booking.serviceName}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-xl text-pink-700 dark:text-pink-400 font-semibold">{booking.serviceName}</h3>
              <p className="text-gray-800 dark:text-gray-300">
                <strong>Booked By:</strong>{' '}
                <span className="text-pink-700 dark:text-pink-400">
                  {booking.userName} ({booking.userEmail})
                </span>
              </p>
              <p className="text-gray-800 dark:text-gray-300"><strong>Date:</strong> {booking.date}</p>
              <p className="text-gray-800 dark:text-gray-300"><strong>Price:</strong> ${booking.price}</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                <strong>Instruction:</strong> {booking.specialInstruction}
              </p>
              <div className="mt-3">
                <label className="mr-2 font-medium text-gray-800 dark:text-gray-300">Status:</label>
                <select
                  className="border px-2 py-1 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={booking.serviceStatus}
                  onChange={e => handleStatusChange(booking._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
