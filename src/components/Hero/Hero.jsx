import React from 'react'
import Button from 'react-bootstrap/Button';
import home1 from '../../assets/home1.jpg';

function Hero() {
  return (
    <div className='homeContainer2'>
        <div className='homePresentation'>
            <h6>"Asesoría de tesis para apoyarte en tu proceso de titulación"</h6>
            <h3>CAI Ventures</h3>
            <p>Nuestro equipo de profesionales experimentados en diversas 
              áreas de investigación está aquí para guiarte y resolver 
              todas tus dudas durante tu proceso de titulación.
            </p>
            <Button className='homeButtons' variant="danger">EMPEZÁ AHORA</Button>
        </div>
        <div className='homePresentationImage'>
            <img src={home1} alt='Chica graduada' />
            <p className='specialTextHome'>“Obtén tu título ahora con CAI Ventures”</p>
        </div>
    </div>
  )
}

export default Hero