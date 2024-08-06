import React from 'react';
import './Classes.css';
import classAsset from '../Asset/classes.jpg'
import Feedback  from './Feedback';

const Classes = () => {
  return (
    <>
    <div className='container'>
      <h1>Classes</h1>
      <div className='main-container'>
      <div className='paragrah-container'>
        <p>FanakaKids Talent Academy is thrilled to offer exceptional ballet,
            violin, and piano classes for young talents. Our dedicated instructors
            nurture creativity, discipline, and a lifelong love for the arts.
            Whether your child dreams of dancing gracefully, playing enchanting melodies, 
            or captivating audiences with the violin, we provide a nurturing environment to 
            help them shine. Join us and watch your child's artistic journey blossom!
        </p>
      </div>
      <div className='paragrah-image'>
        <img src={classAsset} alt='school children'/>
      </div>
    </div>
    </div>
    <Feedback />
    </>
  )
}

export default Classes;
