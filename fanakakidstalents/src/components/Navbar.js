import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import logo from '../Asset/logo.png';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='hero'>
      <nav>
        <img src={logo} alt='folder' className='logo' onClick={() => navigate('/')} />
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <IoCloseCircleOutline size={30} /> : <HiMiniBars3BottomRight size={30} />}
        </div>
        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to='home' smooth={true} duration={1500} onClick={() => navigate('/')} >HOME</Link></li>
          <li><Link to='about' smooth={true} duration={1500} >ABOUT US</Link></li>
          <li><Link to='events' smooth={true} duration={1500}>EVENT</Link></li>
          <li><Link to='classes' smooth={true} duration={1500} >CLASSES</Link></li>
          <li><Link to='feedback' smooth={true} duration={1500} >FEEDBACK</Link></li>
        </ul>
        <div>
          <Link to='gallery' smooth={true} duration={1500} onClick={() => navigate('/gallery')} className='gallery-btn'>GALLERY</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;