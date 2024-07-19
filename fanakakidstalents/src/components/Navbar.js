import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'sss
import logo from '../Asset/logo.png'

const Navbar = () => {
  return (
    <div className='hero'>
      <nav>
        <img src={logo} alt='folder' className='logo'/>
        <ul>
          <li><Link to='about' smooth={true} duration={500}>ABOUT US</Link></li>
          <li><Link to='events' smooth={true} duration={500}>EVENT</Link></li>
          <li><Link to='classes' smooth={true} duration={500}>CLASSES</Link> </li>
          <li><Link to='feedback' smooth={true} duration={500}>FEEDBACK</Link> </li>
        </ul>
        <div>
          <a href='/gallery'className='gallery-btn'>GALLERY</a>
        </div>
      </nav>
      <div className='content'>
        <h1>Your Music  and  <br/>Dance Journey Starts Here.</h1>
        <h3>Discover the harmonious world of ballet, piano, and violin.<br/> Find expert instructors, inspiring classes, and a vibrant community to nurture your passion.</h3>
        <a href='#' className='Aboutus-btn'>ABOUT US</a>
      </div>
    </div>
  )
}

export default Navbar
