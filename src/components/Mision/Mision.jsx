import './Mision.css';
import {  Container, Row, Col, Image } from 'react-bootstrap';
import misionUno from '../../assets/misionUno.svg';
import misionDos from '../../assets/misionDos.svg';
import misionTres from '../../assets/misionTres.svg';

const Mision = () => {
    return (
        <Container className='misionVision'>
            <Row className='misionContainer'>
                <Col>
                    <Image fluid src={misionUno} width='100px' />
                </Col>
                <Col className='containerText'>
                    <h2 className='titleMision'>Misión</h2>
                    <p className='textMision'>Facilitar el camino hacia la titulación y el crecimiento profesional de estudiantes y egresados universitarios mediante un equipo multidisciplinario y metodologías ágiles e innovadoras.</p>
                </Col>
            </Row>

            <Row className='misionContainer'>
                <Col>
                    <Image fluid src={misionDos} width='100px' />
                </Col>
                <Col className='containerText'>
                    <h2 className='titleMision'>Visión</h2>
                    <p className='textMision'>Somos una startup innovadora, dedicada a servir a la sociedad a través de la educación e investigación. Nuestro enfoque es generar un laboratorio de investigación de alcance nacional</p>
                </Col>
            </Row>

            <Row className='misionContainer'>
                <Col>
                    <Image fluid src={misionTres} width='100px' />
                </Col>
                <Col className='containerText'>
                    <h2 className='titleMision'>Objetivos</h2>
                    <p className='textMision'>Somos una startup innovadora, dedicada a servir a la sociedad a través de la educación e investigación. Nuestro enfoque es generar un laboratorio de investigación de alcance nacional</p>
                </Col>
            </Row>
        </Container>
    )
}


export default Mision;