import { Container, Row, Col } from 'react-bootstrap';
import './Service2.css';

const ServiceDos = () => {
    return (
        <Container className='containerServiceDos'>
            <Row className='ServiceContainerRow'>
                <Col className='containerTitle'>
                    <h2 className='tituloSecDos'>¿Qué incluyen las asesorías?</h2>
                </Col>
                <Row>
                <Col>
                    <h3 className='subtitleServiceDos'>Asesoría integral</h3>
                    <Col>
                        <p>Te apoyamos en cada paso, desde la elección del título de tu tesis hasta su finalización. Nuestro objetivo es ayudarte a superar con éxito el proceso de titulación.</p>
                    </Col>
                </Col>
                <Col>
                    <h3 className='subtitleServiceDos'>Asesores profesionales</h3>
                    <Col>
                        <p>Nuestro equipo de asesoramiento tiene una amplia experiencia y especialización en diversas áreas. Te proporcionaremos una asesoría personalizada según tus necesidades e intereses.</p>
                    </Col>
                </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default ServiceDos;