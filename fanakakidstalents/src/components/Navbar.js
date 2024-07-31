import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import logo from '../Asset/logo.png';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
      <nav>
        <img src={logo} alt='folder' className='logo'  onClick={() => navigate('/')} />
        <ul>
          <li><Link to='about' smooth={true} duration={1500} onClick={() => navigate('/')} >ABOUT US</Link></li>
          <li><Link to='events' smooth={true} duration={1500}onClick={() => navigate('/')} >EVENT</Link></li>
          <li><Link to='classes' smooth={true} duration={1500} onClick={() => navigate('/')} >CLASSES</Link></li>
          <li><Link to='feedback' smooth={true} duration={1500} onClick={() => navigate('/')} >FEEDBACK</Link></li>
        </ul>
        <div>
          <Link to='gallery' smooth={true} duration={1500}  onClick={() => navigate('/gallery')} className='gallery-btn'>GALLERY</Link>
        </div>
      </nav>
      <div className='content'>
        <h1>Your Music and Dance Journey Starts Here.</h1>
        <h3>Discover the harmonious world of ballet, piano, and violin.<br/> Find expert instructors, inspiring classes, and a vibrant community to nurture your passion.</h3>
        <Link to='classes' smooth={true} duration={1500} className='Aboutus-btn' style={{cursor:'pointer'}} onClick={() => navigate('/')}>Classes Offered</Link>
      </div>
    </div>
  )
}

export default Navbar;
