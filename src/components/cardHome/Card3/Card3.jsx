import './card3.css';
import { Link } from 'react-router-dom';
import cardImage3 from '../../../assets/home2.jpg';


const Card3 = () => {
    return (
        <div className='homeContactContainer'>
            <div className='homeContactImage'>
                <img src={cardImage3} alt="chicos tirando su sombrero en la graduación" />
            </div>
            <div className='homeContactInfo'>
                <div className='title-card-three'>¿Estás listo/a para iniciar tu camino hacia la titulación?</div>
                <p>Si estás interesado/a en nuestros servicios, no dudes en contactar a nuestro equipo de ventas para reservar tu lugar</p>
                <img src={cardImage3} className='cardImageThree' alt="chicos tirando su sombrero en la graduación" />
                <span><Link className='linkContactHome' to='/contact'>contacto</Link></span>
            </div>
        </div>
    );
}

export default Card3;
