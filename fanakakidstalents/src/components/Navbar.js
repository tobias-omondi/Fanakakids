import React from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'

const Navbar = () => {
  return (
    <div className='hero'>
      <nav>
        <img src={logo} alt='folder' className='logo'/>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT US</a></li>
          <li><a href='#'>CLASSES</a></li>
          <li><a href='#'>REVIEW</a></li>
        </ul>
        <div>
          <a href='/gallery'className='gallery-btn'>GALLERY</a>
        </div>
      </nav>
      <div className='content'>
        <h1>Best <br/> Class  To Enroll,</h1>
        <p>Discover the harmonious world of ballet, piano, and violin.<br/> Find expert instructors, inspiring classes, and a vibrant community to nurture your passion.</p>
        <a href='#' className='Aboutus-btn'>ABOUT US</a>
      </div>
    </div>
  )
}

export default Navbar
