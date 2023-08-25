import { useState } from 'react';
import './navbar.css';
import {  NavLink } from 'react-router-dom';
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
                <NavLink
                 onClick={handleClick}
                 className='nav-link'
                //  ClassName='active'
                 smooth="true"
                 duration={500}
                 to="/"
                 exact="true"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClick}
                  className='nav-link'
                  // activeClassName='active'
                  smooth="true"
                  duration={500}
                  to="/About"
                  exact="true"
                >
                    Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClick}
                  className='nav-link'
                  // activeClassName='active'
                  smooth="true"
                  duration={500}
                  to="/servicios"
                  exact="true"
                  href="#Servicios"
                >
              Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClick}
                  className='nav-link'
                  // activeClassName='active'
                  smooth="true"
                  duration={500}
                  to="/Contact"
                  exact="true"
                >
                  Contacto
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClick}
                  className='nav-link'
                  // activeClassName='active'
                  smooth="true"
                  duration={500}
                  to="/Faq"
                  exact="true"
                >
                  FAQ
                </NavLink>
              </li>
          </ul>
        </nav>
      </Row>
    </Container>

  );
};

export default NavBar;
