
import React, { useState } from 'react';
import './Feedback.css';
import AvatarAsset from '../Asset/parents1.jpeg';
import AvatarAsset1 from '../Asset/parents2.jpeg';
import AvatarAsset2 from '../Asset/parents3.jpeg';
import AvatarAsset3 from '../Asset/parents4.jpeg';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const feedbackData = [
  {
    img: AvatarAsset,
    name: 'Parent 1',
    feedback: 'This is a feedback from parent 1.',
  },
  {
    img: AvatarAsset1,
    name: 'Parent 2',
    feedback: 'This is a feedback from parent 2.',
  },
  {
    img: AvatarAsset2,
    name: 'Parent 3',
    feedback: 'This is a feedback from parent 3.',
  },
  {
    img: AvatarAsset3,
    name: 'Parent 4',
    feedback: 'This is a feedback from parent 4.',
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 2 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className='Feedback-main'>
        <h1>What Parents Say <br /> About Us</h1>
      </div>
      <div className='Slider'>
        <IoIosArrowRoundBack className='arrow prev' onClick={prevSlide} />
        <div className='main-slider'>
          {feedbackData.map((item, index) => (
            <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
              {index === currentIndex && (
                <>
                  <img src={item.img} alt={`avatar of ${item.name}`} />
                  <h3>{item.name}</h3>
                  <p>{item.feedback}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <IoIosArrowRoundForward className='arrow next' onClick={nextSlide} />
      </div>

 <div className='btn-Gallery'>
  <button type='submit'>Gallery</button>
</div> 
    </div>
  );
}

export default Feedback;
