import React from 'react';
import './ErrorConection.css';
import errorNoEncontrada from '../../assets/errorNoEncontrada.png';
import { Container, Image, Col, Row } from 'react-bootstrap';


function NoEncontrada() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={errorNoEncontrada} />
                    <h1 className='tituloError'>Página no encontrada</h1>
                    <p className='textoError'>Lo sentimos, no podemos encontrar la página que estás buscando</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NoEncontrada;