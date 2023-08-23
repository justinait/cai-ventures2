import React, { useState } from 'react';
import './navbar.css';
import {  NavLink, Link } from 'react-router-dom';
import { Container, Row, Image } from 'react-bootstrap';
// import Logo from '../../Images/logo.png'


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
    <Container className='containerNav'>
      <div className="navbar__logo">
            <NavLink to="/">
              {/* <Image src={Logo} /> */}
            </NavLink>
      </div>
      <Row className='log' xxl={12} xl={12} lg={12}>
      
        <nav className={`navbar ${isOpen ? 'open' : ''}`}xxl={12} xl={12} lg={12}>
          
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
                  to="Home"
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
                  to="Nosotros"
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
                  to="Servicios"
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
                  to="Contacto"
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
