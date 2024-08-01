import React from 'react'
import './Home.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className='hero-container'>
      {/* <h1>Home</h1> */}
      <div className='content'>
       <h1>Your Music and Dance Journey Starts Here.</h1>
          <h3>Discover the harmonious world of ballet, piano, and violin.<br/> Find expert instructors, inspiring classes, and a vibrant community to nurture your passion.</h3>
           <Link to='classes' smooth={true} duration={1500} className='Aboutus-btn' style={{cursor:'pointer'}} onClick={() => navigate('/')}>Classes Offered</Link>
        </div>
    </div>
  )
}

export default Home
{/* <div>
<Link to='gallery' smooth={true} duration={1500}  onClick={() => navigate('/gallery')} className='gallery-btn'>GALLERY</Link>
</div>
</nav>
<div className='content'>
<h1>Your Music and Dance Journey Starts Here.</h1>
<h3>Discover the harmonious world of ballet, piano, and violin.<br/> Find expert instructors, inspiring classes, and a vibrant community to nurture your passion.</h3>
<Link to='classes' smooth={true} duration={1500} className='Aboutus-btn' style={{cursor:'pointer'}} onClick={() => navigate('/')}>Classes Offered</Link>
</div> */}