import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://service-hub-server.vercel.app/addServices?providerEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This service will be permanently deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://service-hub-server.vercel.app/addServices/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setServices(prev => prev.filter(service => service._id !== id));
              Swal.fire('Deleted!', 'Your service has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      serviceName: form.serviceName.value,
      description: form.description.value,
      price: form.price.value,
      serviceArea: form.serviceArea.value
    };

    fetch(`https://service-hub-server.vercel.app/addServices/${editingService._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedService)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setServices(prev =>
            prev.map(service =>
              service._id === editingService._id
                ? { ...service, ...updatedService }
                : service
            )
          );
          setEditingService(null);
          Swal.fire('Updated!', 'Service updated successfully.', 'success');
        }
      });
  };

  // if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6 mt-26 w-11/12 mx-auto">
      <Helmet>
        <title>Manage Your Services</title>
      </Helmet>
      <h2 className=" font-bold mb-6 text-center text-pink-700 text-4xl">Manage Your Services</h2>
      {services.length === 0 ? (
        <p>No services added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(service => (
            <div key={service._id} className="p-4 border rounded shadow">
              <img src={service.imageUrl} alt="" className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-xl text-pink-700 font-semibold">{service.serviceName}</h3>
              <p>{service.description}</p>
              <p><strong>Price:</strong> ${service.price}</p>
              <p><strong>Area:</strong> {service.serviceArea}</p>
              <div className="mt-2 flex gap-5 items-center justify-center">
                <button
                  onClick={() => setEditingService(service)}
                  className="btn px-10 btn-outline btn-secondary"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn px-10  bg-pink-700 text-white hover:bg-white hover:text-pink-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingService && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Edit Service</h3>
            <input name="serviceName" defaultValue={editingService.serviceName} className="input input-bordered w-full mb-2" required />
            <input name="price" defaultValue={editingService.price} className="input input-bordered w-full mb-2" required />
            <input name="serviceArea" defaultValue={editingService.serviceArea} className="input input-bordered w-full mb-2" required />
            <textarea name="description" defaultValue={editingService.description} className="textarea textarea-bordered w-full mb-2" required />
            <div className="flex justify-end gap-2">
              <button type="submit" className="btn btn-outline btn-secondary">Update</button>
              <button onClick={() => setEditingService(null)} className="btn btn-outline btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
