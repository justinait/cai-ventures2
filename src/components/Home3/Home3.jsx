
import home4 from '../../assets/home4.jpg';
import swipperDos from '../../assets/swipperDos.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home3() {
  return (
    <Swiper className='carouselHome'
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
            <img src={home4}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swipperDos}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={home4}/>
        </SwiperSlide>

    </Swiper>
  )
}

export default Home3