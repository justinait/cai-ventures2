// import React from 'react';
import './card2.css';
import cardImage3 from '../../../assets/homeCard6.png';


const Card2 = () => {
    return (
        <div className='homeServicesContainer'>
            <div className='homeServicesImage'>
                <img src={cardImage3} alt="imagen de una credencial" />
            </div>
            <div className='homeServicesInfo'>
                <h3>Nuestros servicios de asesorías incluyen:</h3>
                <p>-Acceso a un repositorio de informacion sobre investigación</p>
                <p>-Sesiones virtuales de asesoría.</p>
                <p>-Preparación pre-sustentatorio a cargo de nuestro equipo especializado.</p>
                <p>-Dos revisiones por antiplagio con Turnitin.</p>
            </div>
        </div>
    );
}

export default Card2;
