import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import faqImage from '../../assets/faqImage.png';
import './Questions.css';

function Questions() {
  return (
    <Container className='containerFaq'>
      <Row className='faqRow'>
        <Col className='ContainerImgTitle'>
          <Col xl={4}>
            <img className='imgFaq'  src={faqImage} />
            </Col>
          <Col xl={7} md={6} sm={5}>
            <h2 className='faqTitle'>Preguntas Frecuentes</h2>
            <p className='textFaq'>Sabemos lo importante que es para vos entregar el mejor proyecto universitario. Te brindamos algunas respuestas a las preguntas frecuentes de nuestro servicio.</p>
            <Col>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Hacen elaboración de Tesis?</Accordion.Header>
        <Accordion.Body>
        No, en CAI VENTURES no elaboramos tesis. 
        Sin embargo, ofrecemos un servicio integral de 
        asesoría para tesis, con el objetivo de fomentar 
        la investigación en la sociedad.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Con qué carreras cuentan?</Accordion.Header>
        <Accordion.Body>
        Explora las diversas carreras de Ciencias 
        Sociales que ofrecemos. Visita nuestra página 
        de servicios para más información.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿El asesor está especializado en mi carrera?</Accordion.Header>
        <Accordion.Body>
        Explora las diversas carreras de Ciencias 
        Sociales que ofrecemos. Visita nuestra página 
        de servicios para más información.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Tienen modalidades de pago?</Accordion.Header>
        <Accordion.Body>
        Sí. Ofrecemos y aceptamos pagos en cuotas.
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>
            </Col>
          </Col>
        </Col>
      </Row>

    </Container>
  );
}

export default Questions;