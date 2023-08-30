import { Swiper, SwiperSlide } from 'swiper/react';
import home4 from '../../assets/home4.jpg';
import swipperDos from '../../assets/swipperDos.png';
import swipperTres from '../../assets/swipperTres.png';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination'; 
import './Home3.css';


import { Autoplay, Pagination } from 'swiper/modules'; 


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
        modules={[Autoplay, Pagination]}

        >
      <SwiperSlide>
        <img src={home4} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipperDos} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipperTres} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Home3;
