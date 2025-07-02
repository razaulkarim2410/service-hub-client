import React from 'react';
import FindUs from './FindUs';
import { Link } from 'react-router';
import logo from '../../assets/hub-icon.png'


const Footer = () => {
  return (
    <div className='w-full '>
      <footer className="footer justify-around sm:footer-horizontal bg-pink-700  text-neutral-content mt-5 p-10 ">

        <nav className=''>
          <div className='flex gap-3 items-center justify-evenly sm:text-center'>
            <img className='w-10 h-10 rounded-full' src={logo} alt="" />
          <h2 style={{ color: 'white' }} className='text-2xl font-bold'>Service<span style={{ color: 'white' }}>Hub</span></h2>
          </div>
          

          <p>Email: privacy@servicehub.com</p>
          <p>Address: ServiceHub Inc., 123 Tech Lane, <br /> City Center, CA 90001, USA</p>
        </nav>
        <nav>
          <h6 className=" font-bold text-xl">Company & Legal</h6>
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
        <div className='bg-pink-700 text-center text-white pb-1'>
        © 2025 ServiceHub. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;