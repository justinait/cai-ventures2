// import React from 'react';
import './card1.css';
import { Link } from 'react-router-dom';
import cardImage1 from '../../../assets/cardHome1.jpeg';

const Card1 = () => {
    return (
        <div className='homeTesisContainer'>
            <div className='homeTesisText'>
                <h3>Asesoría de tesis desde cero hasta su preparación para la sustentación</h3>
                <p>Nuestro personal de asesorias e investigación te acompañará en todas las etapas del proceso de asesoria de tesis:</p>
                <p>-Plan de Tesis <br />
                -Borrador de Tesis <br />
                -Sustentación
                </p>
                <span><Link className='linkAboutTesis' to='/about'>ver más</Link></span>
            </div>
            <div className='homeTesisImage'>
                <img src={cardImage1} alt="chica sentada leyendo un libro" />
            </div>
        </div>
    );
}

export default Card1;
