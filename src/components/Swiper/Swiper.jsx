import React, { useState } from 'react'; 
import swipperDos from '../../assets/swipperDos.png';
import swipperTres from '../../assets/swipperTres.png';
import home4 from '../../assets/home4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'; 

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]); 

function SwiperCarousel() {
  const [swiper, setSwiper] = useState(null); 

  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance); 
  };

  return (
    <Swiper
      className='carouselHome'
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={handleSwiper}
    >
      <SwiperSlide>
        <img src={home4} alt='Slide 1' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipperTres} alt='Slide 2' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipperTres} alt='Slide 3' />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCarousel;
