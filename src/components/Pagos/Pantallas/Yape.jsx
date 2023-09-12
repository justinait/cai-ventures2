import { Container, Image, Col, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import YapePagos from '../../../assets/yapePagos.png';
import './Yape.css';
import qrYape from '../../../assets/qrYape.png';
import linkCopiar from '../../../assets/linkCopiar.png';


function YapeScreen ({ reiniciarEstado }) { 

    const textLinkRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (textLinkRef.current) {
      const textToCopy = textLinkRef.current.innerText;

      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles:', textToCopy);
        setCopied(true); 
      } catch (err) {
        console.error('Error al copiar texto al portapapeles:', err);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
    
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
                    <Col className='bordeImgPagos'>
                    <Image src={YapePagos} />
                    </Col>
                    </Col>
                </Row>

                <Row>
                    <Col className='contComprobante'>
                        <p className='textoComprobante'>Por favor, envía el comprobante de pago a:</p>
                        <p className='comprobanteColor'>955 716 302 <span className='textoComprobante'>o</span>  928 897 150</p>

                       <p className='linkPago'>O puedes utilizar este link de pago</p>

                       {copied ? (
                        <Col className='linkCopiarOk'>
                            <p className='textLinkCopiarOk'>¡Link copiado!</p>
                        </Col>
                        
                        ) : (
                       <button className='linkCopiar' onClick={handleCopyLink}>
                        <p className='textLinkCopiar' ref={textLinkRef}>link.pago.pe/12321</p>
                        <Image src={linkCopiar} />
                       </button>
                       )}

                       <button onClick={reiniciarEstado}  className='cancelarPago'>CANCELAR</button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default YapeScreen;