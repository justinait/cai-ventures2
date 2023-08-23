import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
// import HomeCarousel from '../Carousel/Carousel';

function Home() {
  return (
    <div className='heroContainer'>
        <div className='heroContainer2'>
            <div className='heroPresentation'>
                <h6 style={{fontWeight:600}}>Asesorías en servicios de tesis</h6>
                <h3>CAI Ventures</h3>
                <p>Te guiamos en tu proceso de titulación, 
                    despejando tus dudas metodológicas o 
                    especializadas de acuerdo a tu línea 
                    de investigación y/o requerimientos 
                    con un asesor.
                </p>
                <Button variant="danger">EMPEZÁ AHORA</Button>{' '}
            </div>
            <div className='heroPresentationImage'>
                <img src='https://cdn-icons-png.flaticon.com/512/1760/1760560.png' width={150}/>
                <p className='specialTextHome'>“El momento para empezar a 
                <strong><em> cumplir tu sueño</em></strong> es ahora”</p>
            </div>
        </div>

        <div className='heroContainer3'>
            <img className='heroImageWho' width={200} src='https://static.vecteezy.com/system/resources/previews/008/555/893/non_2x/girl-with-graduation-cap-on-head-holding-diploma-flat-illustration-isolated-on-white-background-happy-graduating-girl-cap-vector.jpg' />
            <div className='heroWho'>
                <h3>¿Quiénes somos?</h3>
                <p>Somos una empresa basada en un enfoque de 
                    calidad de servicio, gestión e innovación, 
                    creadora de soluciones ágiles y eficientes 
                    con resultados tangibles.
                </p>
                <Button variant="danger">VER MÁS</Button>{' '}

            </div>
        </div>
        {/* <HomeCarousel /> */}
    </div>
  )
}

export default Home