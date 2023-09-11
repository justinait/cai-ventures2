import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service2.css';
import homeCard6 from '../../assets/homeCard6.png';
import cardSerDos from '../../assets/cardSerDos.png';
import cardSerDosA from '../../assets/cardSerDosA.png';
import cardSerDosB from '../../assets/cardSerDosB.png';
import Pagos from '../../components/Pagos/Pagos';


const ServiceDos = () => {
    return (
        <Container className='containerServiceDos'>
            <Row className='ServiceContainerRow'>
                <Col className='containerTitle'>
                    <h2 className='tituloSecDos'>¿Qué incluyen las asesorías?</h2>
                </Col>
                
                <Row className='containerFirstServ'>
                <Col className='conTodoSerDos'>
                    <Col className='containerTextService'>
                        <Image className='imgServiceDos' fluid src={homeCard6} />
                    </Col>
                    <h3 className='subtitleServiceDos'>Asesoría integral</h3>
                    <Col className='containerTextService'>
                        <p className='textServiceDos'>Te apoyamos en cada paso, desde la elección del título de tu tesis hasta su finalización. Nuestro objetivo es ayudarte a superar con éxito el proceso de titulación.</p>
                    </Col>
                </Col>
                <Col className='conTodoSerDos'>
                    <Col className='containerTextService'>
                        <Image className='imgServiceDosA' fluid src={cardSerDos} />
                    </Col>
                    <h3 className='subtitleServiceDos'>Asesores profesionales</h3>
                    <Col className='containerTextService'>
                        <p className='textServiceDos'>Nuestro equipo de asesoramiento tiene una amplia experiencia y especialización en diversas áreas. Te proporcionaremos una asesoría personalizada según tus necesidades e intereses.</p>
                    </Col>
                </Col>
                </Row>



                <Row className='containerFirstServ'>
                <Col className='conTodoSerDos'>
                    <Col className='containerTextService'>
                        <Image className='imgServiceDos' fluid src={cardSerDosA} />
                    </Col>
                    <h3 className='subtitleServiceDos'>Investigadores</h3>
                    <Col className='containerTextService'>
                        <p className='textServiceDos'>Contarás con el apoyo de un equipo de investigación que te asistirá en la búsqueda y obtención de información para tu tesis.</p>
                    </Col>
                </Col>
                <Col className='conTodoSerDos'>
                    <Col className='containerTextService'>
                        <Image className='imgServiceDosA' fluid src={cardSerDosB} />
                    </Col>
                    <h3 className='subtitleServiceDos'>Plataforma virtual</h3>
                    <Col className='containerTextService'>
                        <p className='textServiceDos'>Cada etapa de tu tesis cuenta con módulos de apoyo donde aprenderás a elaborar y realizar tu trabajo de grado de la mejor manera.</p>
                    </Col>
                </Col>
                </Row>

                <Row>
                    <Col className='serviceContainerButton'>
                         <Button  href="https://zcal.co/caiventures" target= "_blank" className='serviceButtons'>Agendar Sesión</Button>{' '}
                    </Col>            
                </Row>

                <Row className='buttonextra'>
                    <Link to='/Pagos'>
                        <Button className='serviceButtons1'>REALIZÁ TUS PAGOS AQUÍ</Button>
                    </Link>            
                </Row> 
            </Row>
        </Container>
    )
}

export default ServiceDos;