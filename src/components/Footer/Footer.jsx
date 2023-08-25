import React from 'react';
import './Footer.css';
import LogoFooter from '../../assets/caiVenturesLogo.png';
import Instagram from '../../assets/Instagram.png';
import Facebook from '../../assets/Facebook.png';
import Tiktok from '../../assets/Tiktok.png';
import Linkedin from '../../assets/LinkedIN.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='containerLogos'>
                <img src={LogoFooter} alt="logo de la empresa"/>
                <ul className='list listContact'>
                    <li><a href="/"><img src={Instagram} alt="logo de instagram" /></a></li>
                    <li><a href="/"><img src={Facebook} alt="logo de facebook" /></a></li>
                    <li><a href="/"><img src={Linkedin} alt="logo de linkedin" /></a></li>
                    <li><a href="/"><img src={Tiktok} alt="logo de tik tok" /></a></li>
                </ul>
            </div>
            <div>
                <h4>Indice</h4>
                <ul className='list listAnimation'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Nosotros</a></li>
                    <li><a href="/services">Servicios</a></li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/">Términos y Condiciones</a></li>
                </ul>
            </div>
            <div className='containerHelp'>
                <h4>Ayuda</h4>
                <ul className='list listAnimation'>
                    <li><a href="/">Preguntas Frecuentes</a></li>
                    <li><a href="/">Politicas de Privacidad</a></li>
                    <li><a href="/">Términos y Condiciones</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
