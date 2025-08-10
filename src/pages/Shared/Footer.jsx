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
          

          
            <p>House #123, Road #45, Block D</p>
            <p>Banani, Dhaka 1213</p>
            <p>Bangladesh</p>
            <p>Phone: +880 1234 567890</p>
            <p>Email: support@servicehub.com</p>
          
        </nav>
        <nav>
          <h6 className=" font-bold text-xl">Company & Legal</h6>
          
          <Link to={'/terms'} className="link link-hover">Terms of use</Link>
          <Link to={'/privacyPolicy'} className="link link-hover">Privacy policy</Link>
          <Link to={'/cookiePolicy'} className="link link-hover">Cookie policy</Link>
          <Link to={'/support'} className="link link-hover">Support</Link>
          <Link to={'/faq'} className="link link-hover">FAQ</Link>
         
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