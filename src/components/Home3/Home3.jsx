import { Swiper, SwiperSlide } from 'swiper/react';
import home4 from '../../assets/home4.png';
import swipperDos from '../../assets/swipperDos.png';
import swipperTres from '../../assets/swipperTres.png';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import './Home3.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Row, Col, Image } from 'react-bootstrap';


const Home3 = () => {
  return (
    <Row className='swiperRow' >
      <Col xxl={12} xl={12} lg={10} md={10} sm={10}>
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
            <Image fluid src={home4} alt="imagen personas" />
          </SwiperSlide>
          <SwiperSlide>
            <Image fluid src={swipperDos} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image fluid src={swipperTres} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  )
}

export default Home3;
