// import React from 'react';
import './card3.css';
import cardImage2 from '../../../assets/home2.jpg';


const Card3 = () => {
    return (
        <div className='homeContactContainer'>
        <div className='homeContactImage'>
            <img src={cardImage2} alt="chicos tirando su sombrero en la graduación" />
        </div>
        <div className='homeContactInfo'>
            <h3>¿Estás listo/a para iniciar tu camino hacia la titulación?</h3>
            <p>Si estás interesado/a en nuestros servicios,no dudes en contactar a nuestro equipo de ventas para reservar tu lugar</p>
            <span><a href="/contact">contactanos</a></span>
        </div>
    </div>
    );
}

export default Card3;
