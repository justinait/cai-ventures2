
// import 'swiper/swiper-bundle.min.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/components/pagination/pagination.min.css'; 
import SwiperCore, { Pagination } from 'swiper/core'; 

SwiperCore.use([Pagination]); 

const SwiperCarousel = () => {
  return (
    <Swiper className='swiperContainer'
      spaceBetween={30}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>

    </Swiper>
  );
};

export default SwiperCarousel;
