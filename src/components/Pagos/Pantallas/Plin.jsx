import { Container, Image, Col, Row } from 'react-bootstrap';
import React from 'react';
import YapePagos from '../../../assets/yapePagos.png';
import './Yape.css';
import qrYape from '../../../assets/qrYape.png';
import linkCopiar from '../../../assets/linkCopiar.png';

function PlinScreen () { 
    
    return (
        <Container className='containerPagosOk'>
            <Row className='contenedorTodoPago'>
                <Col className='datosPago'>
                    <h2 className='escaneo'>Realiza el pago escaneando el <span className='escaneoBold'>QR</span></h2>
                </Col>
                <Row className='contenedorMonto'>
                    <Col className='montoImgText'>
                    <p className='monto'>Monto a pagar $100</p>
                    <Row className='imgQrCont'>
                        <Col className='contieneImgQr'>
                        <Image src={qrYape} />
                        </Col>
                    </Row>
                    <Image src={YapePagos} />
                    </Col>
                </Row>

                <Row>
                    <Col className='contComprobante'>
                        <p className='textoComprobante'>Por favor, envía el comprobante de pago a:</p>
                        <p className='comprobanteColor'>955 716 302 o 928 897 150</p>

                       <p className='linkPago'>O puedes utilizar este link de pago</p>

                       <Col className='linkCopiar'>
                        <p className='textLinkCopiar'>link.pago.pe/12321</p>
                        <Image src={linkCopiar} />
                       </Col>

                       <button onClick={''}  className='cancelarPago'>CANCELAR</button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default PlinScreen;