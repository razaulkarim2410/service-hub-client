import React, { useEffect, useState, useContext } from 'react';
import { useParams, Navigate } from 'react-router';
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
    <div className="w-11/12 max-w-6xl mx-auto mt-26">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={service.imageUrl}
            alt={service.serviceName}
            className="rounded-xl object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-pink-700">{service.serviceName}</h1>
          <p className="mt-4  leading-relaxed">{service.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={service.providerImage}
              alt={service.providerName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">{service.providerName}</p>
              <p className="text-sm ">{service.serviceArea}</p>
            </div>
          </div>

          {/* Extra Details - Customize as needed */}
          <div className="mt-6 grid grid-cols-2 gap-4 ">
            <div>
              <span className="font-semibold">Price: </span>${service.price}
            </div>
            <div>
              <span className="font-semibold">Category: </span>{service.category || 'General'}
            </div>
            <div>
              <span className="font-semibold">Rating: </span>{service.rating || '5'}⭐⭐⭐⭐⭐
            </div>
            <div>
              <span className="font-semibold">Availability: </span>{service.availability || 'Mon-Fri, 9am-6pm'}
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-outline btn-secondary mt-8 px-12"
          >
            Book Now
          </button>
        </div>
      </div>

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
