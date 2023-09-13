import React from 'react';
import './ErrorConection.css';
import errorNoEncontrada from '../../assets/errorNoEncontrada.png';
import { Container, Image, Col, Row } from 'react-bootstrap';


function ErrorConection() {
    return (
        <Container className='contenedorErrorUno'>
            <Row>
                <Col className='contieneError'>
                    <Image src={errorNoEncontrada} />
                    <h1 className='tituloError'>Error de conexión</h1>
                    <p className='textoError'>Algo no salió como esperábamos. Nuestro equipo ya está trabajando para solucionar este problema.
                    Por favor, intenta de nuevo más tarde.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ErrorConection;