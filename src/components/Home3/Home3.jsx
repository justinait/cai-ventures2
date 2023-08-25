import { Swiper, SwiperSlide } from 'swiper/react';
import home4 from '../../assets/home4.jpg';
import swipperDos from '../../assets/swipperDos.png';
import swipperTres from '../../assets/swipperTres.png';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home3.css';

import React, { useRef, useState } from 'react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

const Home3 = () => {
  return (
    <Swiper className='carouselHome'
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
          }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
    <SwiperSlide>
        <img src={home4} />
    </SwiperSlide>
    <SwiperSlide>
        <img src={swipperDos} />
    </SwiperSlide>
    <SwiperSlide>
        <img src={swipperTres} />
    </SwiperSlide>

    </Swiper>
  )
}

export default Home3;