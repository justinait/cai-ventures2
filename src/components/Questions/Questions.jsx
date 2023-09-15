import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import faqImage from '../../assets/faqImage.png';
import './Questions.css';
import { NavLink } from 'react-router-dom';


function Questions() {
  return (
    <Container className='containerFaq'>
      <Col xl={4} lg={5} md={3} sm={12} className='contImgFaq'>
        <img className='imgFaq' src={faqImage} />
      </Col>
      <Col className='contTiTe' xl={7} md={11} lg={6} sm={8}>
        <div className='divFaqContainer'>
          <div className='faqTitle'>Preguntas Frecuentes</div>
          <p className='textFaq'>Sabemos lo importante que es para vos entregar el mejor proyecto universitario. Te brindamos algunas respuestas a las preguntas frecuentes de nuestro servicio.</p>
        </div>
        <Col>
          <Accordion defaultActiveKey={['0']} alwaysOpen className='custom-accordion'>
            <Accordion.Item eventKey="0" >
              <Accordion.Header className='accordionHeader'>¿Hacen elaboración de Tesis?</Accordion.Header>
              <Accordion.Body className='textoAcordion'>
                No, en CAI VENTURES no elaboramos tesis.
                Sin embargo, ofrecemos un servicio integral de
                asesoría para tesis, con el objetivo de fomentar
                la investigación en la sociedad.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className='accordionHeader'>¿Con qué carreras cuentan?</Accordion.Header>
              <Accordion.Body className='textoAcordion'>
                Explora las diversas carreras de Ciencias
                Sociales que ofrecemos. Visita nuestra página
                de servicios para más información.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className='accordionHeader'>¿El asesor está especializado en mi carrera?</Accordion.Header>
              <Accordion.Body className='textoAcordion'>
              Sí. Contamos con diferentes especialistas, y ponemos a tu disposición a una persona asesora y a una persona investigadora de tu carrera. Ambas personas cuentan con los conocimientos y la experiencia para guiarte en todo el proceso de tu tesis
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className='accordionHeader'>¿Tienen modalidades de pago?</Accordion.Header>
              <Accordion.Body className='textoAcordion'>
                Sí. Ofrecemos y aceptamos pagos en cuotas.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className='accordionHeader'>¿Cómo contratar el servicio?</Accordion.Header>
              <Accordion.Body className='textoAcordion last-acordion'>
                Ingresa a la sección servicios, una vez alli, puedes informarte sobre nuestros servicios y abonar el mismo interactuando con el boton "contratar servicios", o puedes optar por agendar una reunion de prueba. Luego, si estás conforme, puedes comunicarte a caiventures.2023@gmail.com para contratar el servicio. Una vez enviado el comprobante de pago, se te enviará un link para agendar tus sesiones.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Row className='contNo'>
            <NavLink className='nav-link solucion' to='/Contact'>
              <h2 className='questionNo'>¿No has encontrado la solución que buscas?</h2>
            </NavLink>
          </Row>
          
        </Col>
      </Col>
    </Container>
  );
}

export default Questions;