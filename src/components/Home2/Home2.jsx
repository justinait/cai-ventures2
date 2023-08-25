import React from 'react'
import Button from 'react-bootstrap/Button';
import home2 from '../../assets/home2.jpg';

function Home2() {
  return (
    <div className='homeContainer3'>
        <img className='homeImageWho' width={200} src={home2} />
        <div className='homeWho'>
            <h3 className='homeWhoTitle'>¿Por qué asesorarte con CAI Ventures?</h3>
            <div className='homeWhoText'>
                <p> 1. Ahorra tiempo en la elaboración de tu tesis. Con nuestra asesoría y metodología, podrás finalizar tu tesis en menos tiempo y abrirte a mejores oportunidades laborales. </p>
                <p> 2. Te acompañamos hasta que obtengas tu título. Nuestro equipo de asesores e investigadores está preparado para asegurar que obtengas tu título en el primer intento.</p>
                <p> 3. Recibe una guía fácil y práctica para avanzar. Gracias a la metodología de nuestros expertos y nuestra plataforma, llevarás un proceso práctico en cada una de las etapas de la asesoría.</p>
            </div>
            <Button variant="danger">VER MÁS</Button>{' '}

        </div>
    </div>
  )
}

export default Home2