import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='containerLogo'>
                <img src="./assets/logoFooterCaiVentures.png" alt="logo de la empresa"/>
            </div>
            <div>
                <h2>Indice</h2>
                <ul className='list'>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Nosotros</a>
                    </li>
                    <li>
                        <a href="/">Servicios</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                    <li>
                        <a href="/">FAQ</a>
                    </li>
                    <li>
                        <a href="/">Términos y Condiciones</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Síguenos</h2>
                <ul className='list listContact'>
                    <li>
                        <a href="/">instagram</a>
                    </li>
                    <li>
                        <a href="/">facebook</a>
                    </li>
                    <li>
                        <a href="/">linkedin</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
