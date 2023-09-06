import React, { useState } from 'react';
import './Pagos.css';
import Plin from '../../assets/plin.png';
import Yape from '../../assets/yape.png';
import tukuy from '../../assets/tukuy.png';
import code from '../../assets/code.svg';
import efectivo from '../../assets/efectivo.svg';
import bancoNacion from '../../assets/bancoNacion.png';
import interBank from '../../assets/interBank.png';
import bcp from '../../assets/bcp.png';
import bbva from '../../assets/bbva.png';
import flechaPagos from '../../assets/flechaPagos.png';
import { Container, Image, Col, Row } from 'react-bootstrap';

function Pagos() {
  const [mostrarImagenesOnline, setMostrarImagenesOnline] = useState(false);
  const [mostrarImagenesEfectivo, setMostrarImagenesEfectivo] = useState(false);

  const toggleImagenesOnline = () => {
    setMostrarImagenesOnline(!mostrarImagenesOnline);
  };

  const toggleImagenesEfectivo = () => {
    setMostrarImagenesEfectivo(!mostrarImagenesEfectivo);
  };

  

  return (
    <Container className='containerPagos'>
        <Row>
            <Col className='containerPay'>
                <h2 className='titlePay'>Selecciona un método de pago</h2>
            </Col>
        </Row>
        <Row className='containerBox'>
      <Row>
        <Col className='containerBtn'>
            
          <button
            className={`buttonOnline ${mostrarImagenesOnline ? 'active' : ''}`}
            onClick={toggleImagenesOnline}
          >
            <Image src={code} className={`imageOnline `} />
            <p className={`titleOnline ${mostrarImagenesOnline ? 'active-text' : ''}`}>
              Pago online
            </p>
          </button>

          {mostrarImagenesOnline && (
            <>
                      <Image src={flechaPagos} />
   
            <Row className='containerOnlinePay'>
            <Col>
                <button className='buttonDosPay'>
                <Col className='interBtn'>
                    <Image src={Plin} />
                    <p>plin.pe</p>
                </Col>
                </button>
            </Col>
            <Col>
                <button className='buttonDosPay'>
                <Col className='interBtn'>
                    <Image src={Yape} />
                    <p>yape.com.pe</p>
                </Col>
                </button>
            </Col>
            <Col>
                <button className='buttonDosPay'>
                <Col className='interBtn'>
                    <Image src={tukuy} />
                    <p>tukuy.club</p>
                </Col>
                </button>
            </Col>
            </Row>
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col className='containerBtn'>
          <button
            className={`buttonEfectivo ${mostrarImagenesEfectivo ? 'active' : ''}`}
            onClick={toggleImagenesEfectivo}
          >
            <Image src={efectivo} className={`imageEfectivo `} />
            <p className={`titleEfectivo ${mostrarImagenesEfectivo ? 'active-text' : ''}`}>
              Pago en efectivo
            </p>
          </button>
        
          {mostrarImagenesEfectivo && (
            <>
            <Image src={flechaPagos} />
            <Row className='containerOnlinePay'>
            <Col>
                <button className='buttonDosPay'>
                    <Col className='interBtn'>
                    <Image src={bancoNacion} />
                    <p>www.bn.com.pe</p>
                    </Col>
                </button>
            </Col>
            <Col>
                <button className='buttonDosPay'>
                <Col className='interBtn'>
                <Image src={interBank} />
                <p>interbank.pe</p>
                </Col>
                </button>
            </Col>
            <Col>
                <button className='buttonDosPay'>
                    <Col className='interBtn'>
                    <Image src={bcp} />
                    <p>www.viabcp.pe</p>
                    </Col>
                </button>
            </Col>
            <Col>
                <button className='buttonDosPay'>
                <Col className='interBtn'>
                <Image src={bbva} />
                <p>www.bbva.pe</p>
                </Col>
                </button>
            </Col>
            </Row>
            </>
          )}
       </Col>
       </Row>
      </Row>
    </Container>
  );
}

export default Pagos;
