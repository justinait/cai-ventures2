import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home3() {
  return (
    <Swiper
      className='swiperContainer'
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }} 
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}

export default Home3;
