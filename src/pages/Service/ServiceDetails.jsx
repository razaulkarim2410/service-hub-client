import React, { useEffect, useState, useContext } from 'react';
import { useParams, Navigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import BookingModal from '../../component/BookingModal';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://service-hub-server.vercel.app/addServices/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched service:", data);
        setService(data);
      })
      .catch(err => console.error("Error loading service:", err));
  }, [id]);

  if (!user) return <Navigate to="/login" />;
  if (!service) return <p>Loading...</p>;

  return (
    <div className="w-11/12 mx-auto">
      <img src={service.imageUrl} alt={service.serviceName} className="w-full h-64 object-cover rounded-xl mt-22 pt-" />
      <h1 className="text-2xl font-bold mt-4">{service.serviceName}</h1>
      <p className="mt-2">{service.description}</p>

      <div className="flex items-center gap-4 mt-4">
        <img src={service.providerImage} alt="Provider" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{service.providerName}</p>
          <p className="text-sm text-gray-600">{service.serviceArea}</p>
        </div>
      </div>

      <p className="mt-4 text-lg font-medium">Price: ${service.price}</p>
      <button onClick={() => setShowModal(true)} className="btn px-20 mt-4 btn-outline btn-secondary">Book Now</button>

      {showModal && (
        <BookingModal
          service={service}
          user={user}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
