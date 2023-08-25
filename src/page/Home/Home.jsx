
import './Home.css'
import Hero from '../../components/Hero/Hero';
import Home2 from '../../components/Home2/Home2';

import SwiperCarousel from '../../components/Swiper/Swiper';

function Home() {
  return (
    <div className='homeContainer'>
        
        <Hero/>
        <Home2 />

        <SwiperCarousel />
        
    </div>
  )
}

export default Home