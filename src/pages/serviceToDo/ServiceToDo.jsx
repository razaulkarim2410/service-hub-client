import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/booked-services/by-provider?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user?.email]);

  const handleStatusChange = (bookingId, newStatus) => {
    fetch(`http://localhost:3000/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceStatus: newStatus })
    })
      .then(res => res.json())
      .then(() => {
        // Update UI immediately
        setBookings(prev =>
          prev.map(b =>
            b._id === bookingId ? { ...b, serviceStatus: newStatus } : b
          )
        );
      });
  };

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Services To Do</h2>
      {bookings.length === 0 ? (
        <p>No services assigned to you yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map(booking => (
            <div key={booking._id} className="border p-4 rounded shadow">
              <img src={booking.serviceImage} alt="" className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-xl font-semibold">{booking.serviceName}</h3>
              <p><strong>Booked By:</strong> {booking.userName} ({booking.userEmail})</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Price:</strong> ${booking.price}</p>
              <p className="text-sm text-gray-600"><strong>Instruction:</strong> {booking.specialInstruction}</p>
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
