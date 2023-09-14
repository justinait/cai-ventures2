import React from 'react';
import './NoEncontrada.css';
import cuatroError from '../../assets/404error.png';
import { Container, Image, Col, Row } from 'react-bootstrap';


function NoEncontrada() {
    return (
        <Container className='contenedorErrorUno'>
        <Row className='contErrorRow'>
        <Col className='contieneErrorCuatro'>
                    <Image src={cuatroError} className="imgCuatroError"/>
                    <h1 className='tituloErrorCuatro'>Página no encontrada</h1>
                    <p className='textoErrorCuatro'>Lo sentimos, no podemos encontrar la página que estás buscando</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NoEncontrada;