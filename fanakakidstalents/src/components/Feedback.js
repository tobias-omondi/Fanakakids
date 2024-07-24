import React from 'react';
import './Feedback.css';
import { Swiper, SwiperSlide } from "swiper/react";
import AvatarAsset from '../Asset/parents1.jpeg';
import AvatarAsset1 from '../Asset/parents2.jpeg';
import AvatarAsset2 from '../Asset/parents3.jpeg';
import AvatarAsset3 from '../Asset/parents4.jpeg';
import Footer from './Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <>
      <div className='Feedback-main'>
        <h1>What Parents Say <br /> About Us</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ dynamicBullets: true }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}>
        <SwiperSlide>
          <img src={AvatarAsset} className='image_swiper' alt="Parent 1" />
          <h3>Parent 1</h3>
          <p>about the topic</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={AvatarAsset1} className='image_swiper' alt="Parent 2" />
          <h3>Parent 2</h3>
          <p>about the topic</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={AvatarAsset2} className='image_swiper' alt="Parent 3" />
          <h3>Parent 3</h3>
          <p>about the topic</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={AvatarAsset3} className='image_swiper' alt="Parent 4" />
          <h3>Parent 4</h3>
          <p>about the topic</p>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  );
}

export default Feedback;
