import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet';

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user?.email]);

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6">
      <Helmet>
        <title>My Booked Services</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">My Booked Services</h2>
      {bookings.length === 0 ? (
        <p>You haven't booked any services yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map(booking => (
            <div key={booking._id} className="p-4 border rounded shadow">
              <img src={booking.serviceImage} alt="" className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-xl font-semibold">{booking.serviceName}</h3>
              <p><strong>Provider:</strong> {booking.providerName}</p>
              <p><strong>Price:</strong> ${booking.price}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Status:</strong> <span className="text-blue-600">{booking.serviceStatus}</span></p>
              <p className="mt-2 text-gray-600"><strong>Instruction:</strong> {booking.specialInstruction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
