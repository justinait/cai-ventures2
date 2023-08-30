import React from 'react'
import Button from 'react-bootstrap/Button';
import home2 from '../../assets/home22.jpg';
import { Link } from 'react-router-dom';
import './Home.css'

function Home2() {
  return (
    <div className='homeContainer3'>
      <div className='aux'>
        
        <img className='homeImageWho' width={200} src={home2} alt='Chica estudiando'/>
        <Link to="/about">
          <Button className='buttonHome2 homeButtons' variant="danger">VER MÁS</Button>{' '}
        </Link>
      </div>
      
      <div className='homeWho'>
        <h3 className='homeWhoTitle'>¿Por qué asesorarte con CAI Ventures?</h3>
        <div className='homeWhoText'>
          <p><strong className='blueText'> 1.</strong> Ahorra tiempo en la elaboración de tu tesis. Con nuestra asesoría y metodología, podrás finalizar tu tesis en menos tiempo y abrirte a mejores oportunidades laborales. </p>
          <p><strong className='blueText'> 2.</strong>  Te acompañamos hasta que obtengas tu título. Nuestro equipo de asesores e investigadores está preparado para asegurar que obtengas tu título en el primer intento.</p>
          <p><strong className='blueText'> 3.</strong>  Recibe una guía fácil y práctica para avanzar. Gracias a la metodología de nuestros expertos y nuestra plataforma, llevarás un proceso práctico en cada una de las etapas de la asesoría.</p>
        </div>
        <Link to="/about">
          <Button className='homeButtons' variant="danger">VER MÁS</Button>{' '}
        </Link>
        
      </div>
    </div>
  )
}

export default Home2