import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const newAddService = {
      imageUrl: form.imageUrl.value,
      serviceName: form.serviceName.value,
      price: form.price.value,
      serviceArea: form.serviceArea.value,
      description: form.description.value,
      providerName: user.displayName,
      providerEmail: user.email,
      providerImage: user.photoURL,
    };

    fetch('https://service-hub-server.vercel.app/addServices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAddService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({ title: "Service Added Successfully!", icon: "success" });
          form.reset();
        }
      });
  };

  return (
    <div className='md:p-10 md:mt-10'>
      <Helmet><title>Add Service</title></Helmet>
      <h2 className='text-4xl font-bold text-pink-700 text-center mb-8'>Add New Service</h2>
      <form onSubmit={handleAddService} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <input
          name="imageUrl"
          required
          placeholder="Image URL"
          className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
        />
        <input
          name="serviceName"
          required
          placeholder="Service Name"
          className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
        />
        <input
          name="price"
          required
          placeholder="Price"
          className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
        />
        <input
          name="serviceArea"
          required
          placeholder="Service Area"
          className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
        />
        <input
          name="description"
          required
          placeholder="Description"
          className="input input-bordered w-full col-span-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
        />
        <input
          type="submit"
          value="Add Service"
          className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700 col-span-2"
        />
      </form>

    </div>
  );
};

export default AddService;
