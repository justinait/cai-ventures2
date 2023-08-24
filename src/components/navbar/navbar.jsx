import { useState } from 'react';
import './navbar.css';
import {  NavLink, Link } from 'react-router-dom';
import { Container, Row, Image } from 'react-bootstrap';
import Logo from '../../assets/logoNav.png';




const NavBar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setClicked(!clicked);
    setIsOpen(false); 
  };



  return (

    <Container className='containerNav' >
      <div className="navbar__logo">
            <NavLink to="/">
              <Image className='logoNav' src={Logo} />
            </NavLink>
      </div>
      <Row className='log' xxl={12} xl={12} lg={12}>
      
        <nav className={`navbar ${isOpen ? 'open' : ''}`} >
          
          <button className={`navbar__toggle-btn`} onClick={toggleNavbar}>
            <span className="navbar__toggle-icon" />
          </button>
          
          <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>

              <li>
                <Link
                  onClick={handleClick}
                  className={clicked ? 'active' : 'inactive'}
                  smooth={true}
                  duration={500}
                  to="/"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  className={clicked ? 'active' : 'inactive'}
                  smooth={true}
                  duration={500}
                  to="About"
                  href="#"
                >
                    Nosotros
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  className={clicked ? 'active' : 'inactive'}
                  smooth={true}
                  duration={500}
                  to="Services"
                  href="#Servicios"
                >
              Servicios
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  className={clicked ? 'active' : 'inactive'}
                  smooth={true}
                  duration={500}
                  to="Contact"
                  href="#"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  className={clicked ? 'active' : 'inactive'}
                  smooth={true}
                  duration={500}
                  to="Faq"
                  href="#"
                >
                  FAQ
                </Link>
              </li>
          </ul>
        </nav>
      </Row>
    </Container>

  );
};

export default NavBar;
