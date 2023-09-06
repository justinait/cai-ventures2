import React, { useState } from 'react';
import './Pagos.css';
import Plin from '../../assets/plin.png';
import Yape from '../../assets/yape.png';
import tukuy from '../../assets/tukuy.png';
import code from '../../assets/code.svg';
import efectivo from '../../assets/efectivo.png';
import bancoNacion from '../../assets/bancoNacion.png';
import interBank from '../../assets/interBank.png';
import bcp from '../../assets/bcp.png';
import bbva from '../../assets/bbva.png';
import { Container, Image, Col, Row } from 'react-bootstrap';

function UncontrolledExample() {
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
        <Col>
          <button
            className={`buttonOnline ${mostrarImagenesOnline ? 'active' : ''}`}
            onClick={toggleImagenesOnline}
          >
            <Image src={code} />
            <p className={`titleOnline ${mostrarImagenesOnline ? 'active-text' : ''}`}>
              Pago online
            </p>
          </button>
          {mostrarImagenesOnline && (
            <>
            <Col>
                <Image src={Plin} />
                <p>plin.pe</p>
            </Col>
            <Col>
                <Image src={Yape} />
                <p>yape.com.pe</p>
            </Col>
            <Col>
                <Image src={tukuy} />
                <p>tukuy.club</p>
            </Col>
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            className={`buttonEfectivo ${mostrarImagenesEfectivo ? 'active' : ''}`}
            onClick={toggleImagenesEfectivo}
          >
            <Image src={efectivo} />
            <p className={`titleEfectivo ${mostrarImagenesEfectivo ? 'active-text' : ''}`}>
              Pago en efectivo
            </p>
          </button>
          {mostrarImagenesEfectivo && (
            <>
            <Col>
                <Image src={bancoNacion} />
                <p>www.bn.com.pe</p>
            </Col>
            <Col>
                <Image src={interBank} />
                <p>interbank.pe</p>
            </Col>
            <Col>
                <Image src={bcp} />
                <p>www.viabcp.pe</p>
            </Col>
            <Col>
                <Image src={bbva} />
                <p>www.bbva.pe</p>
            </Col>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UncontrolledExample;
