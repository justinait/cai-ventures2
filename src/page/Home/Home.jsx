import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div className='heroContainer'>
        <div className='heroContainer2'>
            <div className='heroPresentation'>
                <h6>Asesorías en servicios de tesis</h6>
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
                <p>“El momento para empezar a 
                <strong> cumplir tu sueño</strong> es ahora”</p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero