// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-64 md:h-80 my-4 md:my-10 w-6/12 mx-auto rounded-lg"
      >
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/2yzy0ZK/slide2.jpg
" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/Ny2qPQP/slide4.jpg
" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/0sdjvXL/slide6.jpg
" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/G5m9TDh/slide1.jpg
" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/6RZTwrm/slide3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full object-cover' src="https://i.ibb.co/5T73nzb/slide5.jpg
" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider
