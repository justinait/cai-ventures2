import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import {  NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import  {  useEffect } from "react";
import { Image } from 'react-bootstrap';
import Logo from '../../assets/logoNav.png';
import logoBajada from '../../assets/logoBajada.png';
import './navbar.css';



const NavBar = () => {



  const [collapsed, setCollapsed] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const logoToShow = isDesktop ? logoBajada : Logo;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
<nav className="contieneNav navbar navbar-expand-md navbar-dark ">
      <div className="container NavbarCont">
      <Navbar.Brand href="#home">
             <NavLink to="/">
               <Image className='logoNav' src={logoToShow} />
            </NavLink>
         </Navbar.Brand>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
          <NavLink className='nav-link' to='/'> Home </NavLink>
          <NavLink className='nav-link' to='/services'>Servicios</NavLink>
          <NavLink className='nav-link' to='/About'>Nosotros</NavLink>            
          <NavLink className='nav-link' to='/Blog'>Blog</NavLink>
          <NavLink className='nav-link' to='/Contact'>Contacto</NavLink>
          <NavLink className='nav-link' to='/Faq'>FAQ</NavLink>  
          </ul>
        </div>
      </div>
    </nav>
    )
    }

    export default NavBar;