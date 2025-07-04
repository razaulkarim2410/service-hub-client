import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://service-hub-server.vercel.app/booked-services/by-provider?email=${user.email}`, {
        credentials: 'include',
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Unauthorized or failed to fetch');
          }
          return res.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            setBookings(data);
          } else {
            console.warn('Unexpected response:', data);
            setBookings([]);
          }
        })
        .catch(err => {
          console.error('Fetch error:', err);
          setError('Failed to load your services. Please try again.');
          setBookings([]);
        });
    }
  }, [user?.email]);

  const handleStatusChange = (bookingId, newStatus) => {
    fetch(`https://service-hub-server.vercel.app/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceStatus: newStatus }),
    })
      .then(res => res.json())
      .then(() => {
        setBookings(prev =>
          prev.map(b =>
            b._id === bookingId ? { ...b, serviceStatus: newStatus } : b
          )
        );
      });
  };

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6 w-11/12 mx-auto mt-28">
      <Helmet>
        <title>Services To Do</title>
      </Helmet>
      <h2 className="text-4xl text-pink-700 text-center font-bold mb-4">Services To Do</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {Array.isArray(bookings) && bookings.length === 0 ? (
        <p>No services assigned to you yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map(booking => (
            <div key={booking._id} className="border p-4 rounded shadow">
              <img
                src={booking.serviceImage}
                alt=""
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-xl text-pink-700 font-semibold">{booking.serviceName}</h3>
              <p>
                <strong>Booked By:</strong> <span className='text-pink-700'>{booking.userName} ({booking.userEmail}</span>)
              </p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Price:</strong> ${booking.price}</p>
              <p className="text-sm ">
                <strong>Instruction:</strong> {booking.specialInstruction}
              </p>
              <div className="mt-3">
                <label className="mr-2 font-medium">Status:</label>
                <select
                  className="border px-2 py-1 rounded"
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
