import React from 'react'
import './WhatsApp.css'
import WhatsAppIcon from '../../assets/icons/Button-Whatsapp-Desktop.svg';
import {  Image, Row } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
function WhatsApp() {
  return (

    <Row className='whatsappContainer'>
      <NavLink target="_blanck" to="https://wa.link/xn96ef" rel="noreferrer">
        <Image src={WhatsAppIcon} alt="whatsapp" className="whatsappIcon" />
      </NavLink>
    </Row>

  )
}

export default WhatsApp;