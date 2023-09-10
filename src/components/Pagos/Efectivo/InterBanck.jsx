import { Container, Image, Col, Row } from 'react-bootstrap';
import React from 'react';
import './BancoNacion.css';
import linkCopiarBn from '../../../assets/linkCopiarBn.png';
import bancoNacionPago from '../../../assets/bancoNacionPago.png';

function InterScreen () { 
    
    return (
        <Container className='containerPagosOk'>
            <Row className='contenedorTodoPagoNacion'>
                <Col className='datosPago'>
                    <h2 className='escaneo'>Copia la información a continuación para realizar tu pago mediante <span className='escaneoBold'>transferencia</span> o <span className='escaneoBold'> depósito bancario</span> </h2>
                </Col>
                <Row className='contenedorMontoNacion'>
                    <Col className='contenedorInterno'>
                    <p className='montoBanco'>Monto a pagar $100 soy inter</p>
                    <Row className='imgQrContNacion'>
                        <Col>
                            <p className='titular'>Titular de la cuenta</p>
                                <Col className='contTitular'>
                                    <p className='nameTitular'>YULI YASMINA SORIA MENDOZA</p>
                                    <Image src={linkCopiarBn} />
                                </Col>
                        </Col>
                        <Col>
                            <p className='titular'>Número de cuenta</p>
                                <Col className='contTitular'>
                                    <p className='nameTitular'>04-181-774253</p>
                                    <Image src={linkCopiarBn} />
                                </Col>
                        </Col>
                        <Col>
                            <p className='titular'>CCI</p>
                                <Col className='contTitular'>
                                    <p className='nameTitular'>018-181-004181774253-83</p>
                                    <Image src={linkCopiarBn} />
                                </Col>
                        </Col>
                        <Image className='imgNacionPago' src={bancoNacionPago} />
                    </Row>
                    
                    </Col>
                </Row>

                <Row>
                    <Col className='contComprobante'>
                        <p className='textoComprobante'>Por favor, envía el comprobante de pago a:</p>
                        <p className='comprobanteColor'>955 716 302 <span className='textoComprobante'>o</span>  928 897 150</p>

                       <button onClick={''}  className='cancelarPago'>CANCELAR</button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default InterScreen;