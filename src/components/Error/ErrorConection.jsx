import React from 'react';
import './ErrorConection.css';
import conection from '../../assets/conection.png';
import { Container, Image, Col, Row } from 'react-bootstrap';


function ErrorConection() {
    return (
        <Container className='contenedorErrorUno'>
            <Row className='contErrorRow'>
                <Col className='contieneError'>
                    <Image className='conectionErrorImg' src={conection} />
                    <h1 className='tituloError'>Error de conexión</h1>
                    <p className='textoError'>Algo no salió como esperábamos. Nuestro equipo ya está trabajando para solucionar este problema.
                    Por favor, intenta de nuevo más tarde.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ErrorConection;