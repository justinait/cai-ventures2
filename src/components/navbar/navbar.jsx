import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';

import { Image } from 'react-bootstrap';
import Logo from '../../assets/logoNav.png';
import './navbar.css';
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="contieneNav" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">
            <NavLink to="/">
              <Image className='logoNav' src={Logo} />
            </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav position-relative">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/'> Home </NavLink>
            <NavLink className='nav-link' to='/About'>Nosotros</NavLink>
            <NavLink className='nav-link' to='/services'>Servicios</NavLink>
            <NavLink className='nav-link' to='/Contact'>Contacto</NavLink>
            <NavLink className='nav-link' to='/Faq'>FAQ</NavLink>  
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;