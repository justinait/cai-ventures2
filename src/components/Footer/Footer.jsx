import './Footer.css';
import { Link } from 'react-router-dom';
import logoFooter from '../../assets/logoFooter.png';
import Instagram from '../../assets/Instagram.png';
import Facebook from '../../assets/Facebook.png';
import Tiktok from '../../assets/Tiktok.png';
import Linkedin from '../../assets/LinkedIN.png';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='containerLogos'>
                    <img src={logoFooter} className='imgLogo' alt="logo de la empresa"/>
                    <ul className='list listContact'>
                        <li><a href=" https://www.instagram.com/tesiscaiventures/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'><img src={Instagram} alt="logo de instagram" /></a></li>
                        <li><a href=" https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d " target='_blank'><img src={Facebook} alt="logo de facebook" /></a></li>
                        <li><a href=" https://www.linkedin.com/in/cai-ventures-3033b8271" target='_blank'><img src={Linkedin} alt="logo de linkedin" /></a></li>
                        <li><a href=" https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" target='_blank'><img src={Tiktok} alt="logo de tik tok" /></a></li>
                    </ul>
                </div>
                <div className='containerIndice'>
                    <h4>Indice</h4>
                    <ul className='list listAnimation'>
                        <li><Link className='linkFooter' to='/'>Inicio</Link></li>
                        <li><Link className='linkFooter' to='/about'>Nosotros</Link></li>
                        <li><Link className='linkFooter' to='/services'>Servicios</Link></li>
                        <li><Link className='linkFooter' to='/contact'>Contacto</Link></li>
                        <li><Link className='linkFooter' to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
                <div className='containerHelp'>
                    <h4>Ayuda</h4>
                    <ul className='list listAnimation'>
                        <li><Link className='linkFooter' to='/privacy'>Politicas de Privacidad</Link></li>
                        <li><Link className='linkFooter' to='/privacy'>Términos y Condiciones</Link></li>
                    </ul>
                </div>
            </footer>
            <footer className='mobileFooterContainer'>
                <div className='mobileLogoContainer'>
                    <img className='logoImageMobile' src={logoFooter} alt="logo de la empresa"/>
                </div>
                <div className='mobileInfoFooter'>
                    <ul className='list listMobile'>
                        <li><a href=" https://www.instagram.com/tesiscaiventures/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'><img className='mobileImagesFooter' src={Instagram} alt="logo de instagram" /></a></li>
                        <li><a href=" https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" target='_blank'><img className='mobileImagesFooter' src={Facebook} alt="logo de facebook" /></a></li>
                        <li><a href=" https://www.linkedin.com/in/cai-ventures-3033b8271" target='_blank'><img className='mobileImagesFooter' src={Linkedin} alt="logo de linkedin" /></a></li>
                        <li><a href=" https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" target='_blank'><img className='mobileImagesFooter' src={Tiktok} alt="logo de tik tok" /></a></li>
                    </ul>
                    <div className='listConditions'>
                        <Link className='linkFooter' to='/privacy'>Politicas de Privacidad</Link>
                        <Link className='linkFooter' to='/privacy'>Términos y Condiciones</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
