import React from 'react';
import './Footer.css';
import logofooter from "../Asset/fanakaclub-high-resolution-logo-transparent.png";
import { SocialIcon } from 'react-social-icons';
import { MdEmail , MdAddIcCall } from "react-icons/md";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <div className='Footer-copy'>
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
      <div><a href='event'>EVENT</a></div>
      <div><a href='classes'>CLASSES</a></div>
      <div><a href='feedback'>FEEDBACK</a></div>
      <div><a href='gallery'>GALLERY</a></div>
      </div>
      <div className='contacts-main'>
        <div>
          <h3 style={{cursor:'pointer'}}>CONTACT US</h3>
        </div>

        <div className='phones-container' style={{cursor:'pointer'}}>
          <MdAddIcCall />
          <h4 style={{cursor:'pointer'}}>number:<br/></h4>
          <span>| +254 741041580</span>
        </div>
        <div className='email-container' style={{cursor:'pointer'}} >
            <MdEmail />
            <h4 style={{cursor:'pointer'}}>EMAIL:<br/> </h4>
               <span><a href="mailto:fanakakidsinfo@gmail.com">fanakakidsinfo@gmail.com</a></span>
        </div>
      </div>
    </div>
    <p style={{color:'white', textAlign:'center', backgroundColor:'black', marginTop:'5px'}}>&copy; {currentYear} fanakaclub. All rights reserved.</p>
    </div>
  );
}

export default Footer;