import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/addServices?providerEmail=${user.email}`)
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
        fetch(`http://localhost:3000/addServices/${id}`, {
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

    fetch(`http://localhost:3000/addServices/${editingService._id}`, {
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
    <div className="p-6">
      <Helmet>
        <title>Manage Your Services</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Manage Your Services</h2>
      {services.length === 0 ? (
        <p>No services added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(service => (
            <div key={service._id} className="p-4 border rounded shadow">
              <img src={service.imageUrl} alt="" className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-xl font-semibold">{service.serviceName}</h3>
              <p>{service.description}</p>
              <p><strong>Price:</strong> ${service.price}</p>
              <p><strong>Area:</strong> {service.serviceArea}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setEditingService(service)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-sm btn-error"
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
              <button type="submit" className="btn btn-success btn-sm">Update</button>
              <button onClick={() => setEditingService(null)} className="btn btn-sm">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
