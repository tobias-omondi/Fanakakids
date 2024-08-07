import React from 'react';
import './Feedback.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AvatarAsset from '../Asset/parents1.jpeg';
import AvatarAsset1 from '../Asset/parents2.jpeg';
import AvatarAsset2 from '../Asset/parents3.jpeg';
import AvatarAsset3 from '../Asset/parents4.jpeg';
import Footer from './Footer'

// Define the responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Feedback = () => {
  const feedbackData = [
    { id: 1, text: "This is the best service I've ever used!", author: "Parent A", avatar: AvatarAsset },
    { id: 2, text: "Amazing experience, highly recommend!", author: "Parent B", avatar: AvatarAsset1 },
    { id: 3, text: "My child loves it here!", author: "Parent C", avatar: AvatarAsset2 },
    { id: 4, text: "Fantastic support and guidance!", author: "Parent D", avatar: AvatarAsset3 },
    { id: 5, text: "A wonderful community for my kids!", author: "Parent E", avatar: AvatarAsset },
  ];

  return (
    <>
      <div className='Feedback-main'>
        <h1>What Parents Say.</h1>
        <Carousel responsive={responsive}>
          {feedbackData.map(feedback => (
            <div key={feedback.id} className='feedback-item'>
              <img src={feedback.avatar} alt={feedback.author} className='feedback-avatar' />
              <p>{feedback.text}</p>
              <h4>- {feedback.author}</h4>
            </div>
          ))}
        </Carousel>
        <div>
         <a href='media' className='btn-Gallery'>GALLERY</a>
       </div>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;