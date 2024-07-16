import React, { useState } from 'react';
import Asset1 from '../Asset/dance.jpg';
import Asset2 from '../Asset/piano.png';
import Asset3 from '../Asset/violin.jpg';

const Classes = () => {
  const [showMoreBallet, setShowMoreBallet] = useState(false);
  const [showMorePiano, setShowMorePiano] = useState(false);
  const [showMoreViolin, setShowMoreViolin] = useState(false);

  // Storing data to be shown on client side
  const balletSummary = "Ballet is a graceful and elegant dance form characterized by precise movements and pointe shoes for female dancers. It requires years of rigorous training and discipline to master its intricate techniques and expressive artistry.";
  const balletFullText = balletSummary + " Ballet is a powerful form of artistic expression that combines athleticism with grace, telling stories and evoking emotions through movement.";

  const pianoSummary = "FanakaKids Talent Academy offers comprehensive piano instruction tailored to different age groups and skill levels. Our dedicated piano teachers focus on ";
  const pianoFullText = pianoSummary + "developing strong musical foundations, reading skills, and technical abilities while encouraging creativity and musical expression.";

  const violinSummary = "FanakaKids Talent Academy nurtures young violinists with expert instruction in proper technique, bowing, and intonation. ";
  const violinFullText = violinSummary + "Our supportive learning environment fosters a passion for the violin, allowing students to explore its beauty and versatility.";

  return (
    <div className='menu-class'>
      <h2>CLASSES</h2>

      <div className='class-img'>
        <img src={Asset1} alt='Child dancing' />
        <p>{showMoreBallet ? balletFullText : balletSummary}</p>
        {showMoreBallet ? (
          <button onClick={() => setShowMoreBallet(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMoreBallet(true)}>READ MORE</button>
        )}
      </div>

      <div className='class-img'>
        <img src={Asset2} alt='a child playing piano' />
        <p>{showMorePiano ? pianoFullText : pianoSummary}</p>
        {showMorePiano ? (
          <button onClick={() => setShowMorePiano(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMorePiano(true)}>READ MORE</button>
        )}
      </div>

      <div className='class-img'>
        <img src={Asset3} alt='a child playing violin' />
        <p>{showMoreViolin ? violinFullText : violinSummary}</p>
        {showMoreViolin ? (
          <button onClick={() => setShowMoreViolin(false)}>READ LESS</button>
        ) : (
          <button onClick={() => setShowMoreViolin(true)}>READ MORE</button>
        )}
      </div>
    </div>
  );
};

export default Classes;
