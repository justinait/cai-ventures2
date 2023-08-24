import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home4 from '../../assets/home4.jpg';

function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeContainer2'>
            <div className='homePresentation'>
                <h6>"Asesoría de tesis para apoyarte en tu proceso de titulación"</h6>
                <h3>CAI Ventures</h3>
                <p>Nuestro equipo de profesionales experimentados en diversas 
                    áreas de investigación está aquí para guiarte y resolver 
                    todas tus dudas durante tu proceso de titulación.
                </p>
                <Button variant="danger">EMPEZÁ AHORA</Button>{' '}
            </div>
            <div className='homePresentationImage'>
                <img src={home1} />
                <p className='specialTextHome'>“Obten tu título ahora con CAI Ventures”</p>
            </div>
        </div>

        <div className='homeContainer3'>
            <img className='homeImageWho' width={200} src={home2} />
            <div className='homeWho'>
                <h3>¿Porqué asesorarte con CAI Ventures?</h3>
                <ol>
                    <li>
                        Ahorra tiempo en la elaboración de tu tesis. Con nuestra asesoría y metodología, podrás finalizar tu tesis en menos tiempo y abrirte a mejores oportunidades laborales. 
                    </li>
                    <li>
                        Te acompañamos hasta que obtengas tu título. Nuestro equipo de asesores e investigadores está preparado para asegurar que obtengas tu título en el primer intento.
                    </li>
                    <li>
                        Recibe una guía fácil y práctica para avanzar. Gracias a la metodología de nuestros expertos y nuestra plataforma, llevarás un proceso práctico en cada una de las etapas de la asesoría.
                    </li>
                    
                </ol>
                {/* 1. Ahorra tiempo en la elaboración de tu tesis. Con nuestra asesoría y metodología, podrás finalizar tu tesis en menos tiempo y abrirte a mejores oportunidades laborales. 
                2. Te acompañamos hasta que obtengas tu título. Nuestro equipo de asesores e investigadores está preparado para asegurar que obtengas tu título en el primer intento.
                3. Recibe una guía fácil y práctica para avanzar. Gracias a la metodología de nuestros expertos y nuestra plataforma, llevarás un proceso práctico en cada una de las etapas de la asesoría. */}

                <Button variant="danger">VER MÁS</Button>{' '}

            </div>
        </div>
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
                <img src='https://img.freepik.com/vector-premium/estudiantes-graduados-estudiantes-sonrientes-amigos-celebrando-graduacion-gracioso-chico-universitario-chica-academia-educacion-decente-diploma-vector-concepto_53562-17063.jpg?w=2000'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://img.freepik.com/vector-premium/estudiantes-graduados-estudiantes-sonrientes-amigos-celebrando-graduacion-gracioso-chico-universitario-chica-academia-educacion-decente-diploma-vector-concepto_53562-17063.jpg?w=2000'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://img.freepik.com/vector-premium/estudiantes-graduados-estudiantes-sonrientes-amigos-celebrando-graduacion-gracioso-chico-universitario-chica-academia-educacion-decente-diploma-vector-concepto_53562-17063.jpg?w=2000'/>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Home