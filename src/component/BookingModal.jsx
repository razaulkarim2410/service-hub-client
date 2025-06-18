// src/components/BookingModal.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookingModal = ({ service, user, onClose }) => {
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handlePurchase = () => {
    const booking = {
      serviceId: service._id,
      serviceName: service.serviceName,
      serviceImage: service.imageUrl,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      date,
      notes,
      price: service.price,
      serviceStatus: 'pending',
    };

    fetch('https://service-hub-server.vercel.app/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire('Success!', 'Service booked successfully.', 'success');
          onClose();
        }
      });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box space-y-4">
        <h3 className="text-lg font-bold">Book Service</h3>
        <p><strong>Service:</strong> {service.serviceName}</p>
        <p><strong>Provider:</strong> {service.providerName}</p>
        <p><strong>Price:</strong> ${service.price}</p>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="input input-bordered w-full" />
        <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Special Instructions" className="textarea textarea-bordered w-full" />
        <div className="modal-action">
          <button onClick={handlePurchase} className="btn btn-primary">Purchase</button>
          <button onClick={onClose} className="btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
