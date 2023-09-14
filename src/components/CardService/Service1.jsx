import React from 'react';
import caiCero from "../../assets/imgTabletServices.png";
import cai from '../../assets/imgDosSer.png';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Service1.css';
import { Link } from 'react-router-dom';
import {  NavLink } from 'react-router-dom';


function Service1() {
  return (
    <Container className='containerServiceUno'>
            <Row className='contSerUn'>
                <Col className='containerTitle'>
                    <Col className='contUnoSer'>
                        <h1 className='comienzaTitle'>"Comienza tu camino a la obtención de tu título"</h1>
                        <p className='textSerUn'>Puedes agendar una primera sesión gratuita, para informarte de todo lo necesario para comenzar.</p>
                        
                        <Row className='btnSerUn'>
                            <Col className='contBt'>
                                <NavLink to='https://zcal.co/caiventures' target= "_blank">
                                <button  className='serviceButtonsUn'>AGENDAR SESIÓN</button>{' '}
                                </NavLink>
                                <Link to='/Pagos'>
                                <button className='serviceButtonsUnA'>CONTRATAR SERVICIO</button>{' '}
                                </Link>
                                </Col>
                        </Row>

                    </Col>
                    

                    <Col className='imgSerUno'>
                        <Image className='imgSerUn' src={caiCero} />
                    </Col>
                </Col>
            </Row>
            <Row className='ofrecen'>
            <h1 className='titleOfre'>Qué servicios ofrecemos</h1>
            <Row className='containerOfrec'>

                    <h2 className='ofreGradoTitle'>1. Tesis de pregrado </h2>
                    <p className='textGradoDos'>Ofrecemos un servicio de acompañamiento completo para la elaboración de tesis de licenciatura, tesis de pregrado y tesinas. Nuestro apoyo abarca desde la construcción del planteamiento del problema, el marco teórico y el diseño metodológico, hasta el procesamiento de los datos, el análisis de resultados, las conclusiones y las referencias bibliográficas.</p>

                    <h2 className='ofreGradoTitle'>2. Tesis de pregrado </h2>
                    <p className='textGrado'>Nos especializamos en brindar asesorías para tesis de Maestría y Posgrados en Ciencias Sociales, acompañando a la persona que realiza la tesis en todo su proceso.</p>

            </Row>
            </Row>

            <Row className='contSerUnAse'>
                <Col className='containerTitleAse'>
                    <Col className='imgSerAseso'>
                            <Image className='imgSerAse' src={cai} />
                    </Col>
                    
                    <Col className='contUnoAse'>
                        <h1 className='enfoqueTitle'>Nos enfocamos en asesorías de tesis de las carreras de:</h1>
                        
                        <li className='liEnfoque'>Administración</li>
                        <li className='liEnfoque'>Contabilidad </li>
                        <li className='liEnfoque'>Economía</li>
                        <li className='liEnfoque'>Turismo</li>
                        <li className='liEnfoque'>Educación</li>
                        <li className='liEnfoque'>Antropología</li>
                        <li className='liEnfoque'>Psicología</li>
                        <li className='liEnfoque'>Ingeniería de industrial</li>
                        <li className='liEnfoque'>Sociología</li>
                        <li className='liEnfoque'>Ciencias de la comunicación</li>
                        
                    </Col>              
                </Col>
                
            </Row>
  

        </Container>

  )
}

export default Service1;