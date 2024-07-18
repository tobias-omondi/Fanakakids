import React from 'react';
import './Footer.css';
import logofooter from "../Asset/fanakaclub-high-resolution-logo-transparent.png";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='logo-footer'>
        <img src={logofooter} alt='logo' />
      <div className='social-icons'>
        <SocialIcon url="https://www.youtube.com" network="youtube" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.instagram.com" network="instagram" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.tiktok.com" network="tiktok" style={{ height: 35, width: 35 }} />
      </div>
      </div>
      <div className='links-page'>
      <div><a href='about'>ABOUT US</a></div>
      <div><a href='about'>ABOUT US</a></div>
      <div><a href='about'>ABOUT US</a></div>
      <div><a href='about'>ABOUT US</a></div>
      </div>
    </div>
  );
}

export default Footer;
