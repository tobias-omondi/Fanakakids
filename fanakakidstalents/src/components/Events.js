import React, { useState } from 'react';
import Asset1 from '../Asset/dance.jpg';
import Asset2 from '../Asset/piano.png';
import Asset3 from '../Asset/violin.jpg';
import './Event.css'

const Events = () => {
  const [showMoreBallet, setShowMoreBallet] = useState(false);
  const [showMorePiano, setShowMorePiano] = useState(false);
  const [showMoreViolin, setShowMoreViolin] = useState(false);

  // Storing data to be shown on client side
  const balletSummary = "FanakaKids Talent Academy offers exceptional ballet training for young dancers, focusing on grace, discipline, and technical proficiency.";
  const balletFullText = balletSummary + "Our experienced instructors nurture budding talents and instill a lifelong love for this elegant art form.";

  const pianoSummary = "FanakaKids Talent Academy offers comprehensive piano instruction tailored to different age groups and skill levels. Our dedicated piano teachers focus on ";
  const pianoFullText = pianoSummary + "developing strong musical foundations, reading skills, and technical abilities while encouraging creativity and musical expression.";

  const violinSummary = "FanakaKids Talent Academy nurtures young violinists with expert instruction in proper technique, bowing, and intonation. ";
  const violinFullText = violinSummary + "Our supportive learning environment fosters a passion for the violin, allowing students to explore its beauty and versatility.";

  return (
    <div className='class-headings'>
      <h2>Events</h2>
      <h4 style={{textAlign:'center'}}>Join Us to be part of our Events<br/> as we have fun with our Children.</h4>
      <div className='menu-class'>

      <div className='class-img'>
        <img src={Asset1} alt='Child dancing' />
        <h3>Ballerina &  Danseur</h3>
        <p>{showMoreBallet ? balletFullText : balletSummary}</p>
        {showMoreBallet ? (
          <button onClick={() => setShowMoreBallet(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMoreBallet(true)}>READ MORE</button>
        )}
      </div>

      <div className='class-img'>
        <img src={Asset2} alt='a child playing piano' />
        <h3>Pianist.</h3>
        <p>{showMorePiano ? pianoFullText : pianoSummary}</p>
        {showMorePiano ? (
          <button onClick={() => setShowMorePiano(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMorePiano(true)}>READ MORE</button>
        )}
      </div>

      <div className='class-img'>
        <img src={Asset3} alt='a child playing violin' />
        <h3>Violinist.</h3>
        <p>{showMoreViolin ? violinFullText : violinSummary}</p>
        {showMoreViolin ? (
          <button onClick={() => setShowMoreViolin(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMoreViolin(true)}>READ MORE</button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Events;
