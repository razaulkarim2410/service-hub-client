import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';


const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log('user in the token', user.accessToken)
  useEffect(() => {
    if (user?.email) {
      fetch(`https://service-hub-server.vercel.app/bookings?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user?.email, user.accessToken]);

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6 w-11/12 mx-auto mt-28">
      <Helmet>
        <title>My Booked Services</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-pink-700 mb-4 text-center">My Booked Services</h2>
      {bookings.length === 0 ? (
        <p>You haven't booked any services yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map(booking => (
            <div key={booking._id} className="p-4 border rounded shadow">
              <img src={booking.serviceImage} alt="" className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-xl text-pink-700 font-semibold">{booking.serviceName}</h3>
              <p><strong>Provider:</strong> {booking.providerName}</p>
              <p><strong>Price:</strong> ${booking.price}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Status:</strong> <span className="text-pink-700">{booking.serviceStatus}</span></p>
              <p className="mt-2 "><strong>Instruction:</strong> {booking.specialInstruction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
