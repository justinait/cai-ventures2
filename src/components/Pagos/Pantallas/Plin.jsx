import { Container, Image, Col, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import plinPagos from '../../../assets/plinPagos.png';
import './Yape.css';
import qrYape from '../../../assets/qrYape.png';
import linkCopiar from '../../../assets/linkCopiar.png';

function PlinScreen ({ reiniciarEstado }) {
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
            <Row className='imgQrCont'>
              <Col className='contieneImgQr'>
                <Image src={qrYape} />
              </Col>
            </Row>
            <Col className='bordeImgPagos'>
              <Image src={plinPagos} />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col className='contComprobante'>
            <p className='textoComprobante'>Por favor, envía el comprobante de pago a:</p>
            <p className='comprobanteColor'>955 716 302 <span className='textoComprobante'>o</span> 928 897 150</p>
            <button onClick={reiniciarEstado} className='cancelarPago'>CANCELAR</button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default PlinScreen;
