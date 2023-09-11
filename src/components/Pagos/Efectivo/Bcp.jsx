import { Container, Image, Col, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import './BancoNacion.css';
import linkCopiarBn from '../../../assets/linkCopiarBn.png';
import bcpPagos from '../../../assets/bcpPagos.png';

function BcpScreen () { 

    const textLinkRefTitular = useRef(null);
    const textLinkRefCuenta = useRef(null);
    const textLinkRefCCI = useRef(null);

    const [copiedTitular, setCopiedTitular] = useState(false);
    const [copiedCuenta, setCopiedCuenta] = useState(false);
    const [copiedCCI, setCopiedCCI] = useState(false);
  
    const handleCopyLink = (ref, setCopiedState) => {
      if (ref.current) {
        const textToCopy = ref.current.innerText;
  
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
  
        try {
          document.execCommand('copy');
          console.log('Texto copiado al portapapeles:', textToCopy);
          setCopiedState(true);
        } catch (err) {
          console.error('Error al copiar texto al portapapeles:', err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    };
    
    return (
        <Container className='containerPagosOk'>
            <Row className='contenedorTodoPagoNacion'>
                <Col className='datosPago'>
                    <h2 className='escaneo'>Copia la información a continuación para realizar tu pago mediante <span className='escaneoBold'>transferencia</span> o <span className='escaneoBold'> depósito bancario</span> </h2>
                </Col>
                <Row className='contenedorMontoNacion'>
                    <Col className='contenedorInterno'>
                    <p className='montoBanco'>Monto a pagar $100</p>
                    <Row className='imgQrContNacion'>
                        <Col>
                            <p className='titular'>Titular de la cuenta</p>
                            {copiedTitular ? (
                                <Col className='linkCopiarOk'>
                                    <p className='textLinkCopiarOk'>¡Copiado!</p>
                                </Col>
                            ) : (
                                <button className='contTitular' onClick={() => handleCopyLink(textLinkRefTitular, setCopiedTitular)}>
                                    <p className='nameTitular' ref={textLinkRefTitular}>YULI YASMINA SORIA MENDOZA</p>
                                    <Image src={linkCopiarBn} />
                                </button>
                            )}
                        </Col>
                        <Col>
                            <p className='titular'>Número de cuenta</p>
                            {copiedCuenta ? (
                                <Col className='linkCopiarOk'>
                                    <p className='textLinkCopiarOk'>¡Copiado!</p>
                                </Col>
                            ) : (
                                <button className='contTitular' onClick={() => handleCopyLink(textLinkRefCuenta, setCopiedCuenta)}>
                                    <p className='nameTitular' ref={textLinkRefCuenta}>28504808818057</p>
                                    <Image src={linkCopiarBn} />
                                </button>
                            )}
                        </Col>
                        <Col>
                            <p className='titular'>CCI</p>
                            {copiedCCI ? (
                                <Col className='linkCopiarOk'>
                                    <p className='textLinkCopiarOk'>¡Copiado!</p>
                                </Col>
                            ) : (
                                <button className='contTitular' onClick={() => handleCopyLink(textLinkRefCCI, setCopiedCCI)}>
                                    <p className='nameTitular' ref={textLinkRefCCI}>00228510480881805753</p>
                                    <Image src={linkCopiarBn} />
                                </button>
                            )}
                        </Col>
                        <Col className='bordeImgPagosEfectivo'>
                        <Image className='imgNacionPago' src={bcpPagos} />
                        </Col>
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

export default BcpScreen;
