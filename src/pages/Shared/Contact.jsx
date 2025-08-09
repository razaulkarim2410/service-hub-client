import React, { useState } from 'react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation here

    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="max-w-4xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-pink-700">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-700">
            Have questions or need support? We're here to help! Reach out via form or the contact details below.
          </p>
          <div className="text-gray-700 space-y-1">
            <p><strong>ServiceHub Office</strong></p>
            <p>House #123, Road #45, Block D</p>
            <p>Banani, Dhaka 1213</p>
            <p>Bangladesh</p>
            <p>Phone: +880 1234 567890</p>
            <p>Email: support@servicehub.com</p>
          </div>


          {/* Optional social media links */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a className='flex gap-2 text-l font-bold items-center' href="https://www.facebook.com/share/179nE1FpYY/" target="_blank"
                rel="noopener noreferrer"><SiFacebook /> Facebook</a>
              <a className='flex gap-2 text-l font-bold items-center' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank"
                rel="noopener noreferrer"><FaLinkedin />Linkedin</a>
              <a className='flex gap-2 text-l font-bold items-center' href="https://x.com/RazaulKarim2410" target="_blank"
                rel="noopener noreferrer"><FaXTwitter />
                Twitter</a>
              <a className='flex gap-2 text-l font-bold items-center' href="https://www.youtube.com/@Farzankarim-sd7lu" target="_blank"
                rel="noopener noreferrer"><IoLogoYoutube /> YouTube</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="btn bg-pink-700 text-white hover:bg-pink-600 w-full"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-green-600">{status}</p>}
        </form>
      </div>


    </section>
  );
};

export default Contact;
