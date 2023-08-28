import React from 'react'
import './WhatsApp.css'
import WhatsAppIcon from '../../assets/icons/Button-Whatsapp-Desktop.svg';

function WhatsApp() {
  return (
    <div className='whatsappContainer'>
        
      <a href='https://wa.link/xn96ef' target="_blank">
        <img src={WhatsAppIcon} alt="" className='whatsappIcon' />
      </a>
        
    </div>
  )
}

export default WhatsApp