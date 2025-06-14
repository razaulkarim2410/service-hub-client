import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import BookingModal from '../../component/BookingModal';
import { Navigate, useParams } from 'react-router';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/addServices/${id}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id]);

  if (!user) return <Navigate to="/login" />; // 🔒 Private route
  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-6">
      {/* Service Section */}
      <img src={service.imageUrl} alt={service.serviceName} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{service.serviceName}</h1>
      <p className="mt-2">{service.description}</p>

      {/* Provider Info */}
      <div className="flex items-center gap-4 mt-4">
        <img src={service.providerImage} alt="Provider" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{service.providerName}</p>
          <p className="text-sm text-gray-600">{service.serviceArea}</p>
        </div>
      </div>

      {/* Price & Booking */}
      <p className="mt-4 text-lg font-medium">Price: ${service.price}</p>
      <button onClick={() => setShowModal(true)} className="btn btn-primary mt-4">Book Now</button>

      {/* Booking Modal */}
      {showModal && <BookingModal service={service} user={user} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ServiceDetails;
