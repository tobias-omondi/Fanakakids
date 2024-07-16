import React, { useState } from 'react';
import './About.css';
import aboutimg from "../Asset/about.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const summary = "FanakaKids Talent Academy is a haven for young artistic spirits. Nestled within the serene ambiance of Tassia Catholic Church, we offer exceptional training in ballet, piano, and violin.Our dedicated instructors nurture each child's unique talents, fostering a love for music and dance. From the grace of ballet to the harmony of piano and violin, we provide a comprehensive foundation for aspiring young artists."; <br/>
  const fullText = summary + "At FanakaKids, we believe in creating a supportive and inspiring learning environment. Our programs emphasize both technical proficiency and artistic expression. With a focus on individual attention, we empower our students to reach their full potential. Join us as we cultivate the next generation of talented musicians and dancers.";

  return (
    <div className='main'>
      <menu>
        <h2>ABOUT US</h2>
        <div className='main-topic'>
          <h3>FanakaKids Talent Academy: Nurturing Young Artists.</h3>
          <p>{showMore ? fullText : summary}</p>
          {showMore ? (
            <button className='arrow-wrapper' onClick={() => setShowMore(false)}>Read Less</button>
          ) : (
            <button className='arrow-wrapper'  onClick={() => setShowMore(true)}>Read More</button>
          )}
        </div>
      </menu>
      <div className='main-image'>
        <img src={aboutimg} alt='child'/>
      </div>
    </div>
  );
};

export default About;
