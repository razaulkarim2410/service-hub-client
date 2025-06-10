import React from 'react';
import FindUs from './FindUs';
import { Link } from 'react-router';
import logo from '../../assets/servicehub-high-resolution-logo-transparent.png'


const Footer = () => {
  return (
    <div className=' mx-auto  w-11/12'>
      <footer className="footer justify-around sm:footer-horizontal bg-purple-950 text-neutral-content mt-14 p-10">

        <nav className=''>
          <div className='flex gap-3 items-center'>
            <img className='w-20 h-20 rounded-full' src={logo} alt="" />
          <h2 style={{ color: 'white' }} className='text-5xl font-bold'>Service<span style={{ color: 'green' }}>Hub</span></h2>
          </div>
          

          <p>📧 Email: privacy@servicehub.com</p>
          <p>📍 Address: ServiceHub Inc., 123 Tech Lane, City Center, CA 90001, USA</p>
        </nav>
        <nav>
          <h6 className="footer-title font-bold text-xl">Company & Legal</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms of use</a>
          <Link to={'/privacyPolicy'} className="link link-hover">Privacy policy</Link>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <FindUs></FindUs>
        </nav>


      </footer>
      <div class="text-center py-4 text-sm text-gray-500 border-t mt-8">
        © 2025 ServiceHub. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;