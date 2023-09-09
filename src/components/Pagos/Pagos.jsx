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
import { Container, Image, Col, Row } from 'react-bootstrap';
import YapeScreen from './Pantallas/Yape';
import TukuyScreen from './Pantallas/Tukuy';
import PlinScreen from './Pantallas/Plin';
import BancoNacion from './Efectivo/BancoNacion'; 
import flechaPagos from '../../assets/flechaPagos.svg';
import InterScreen from './Efectivo/InterBanck';

function Pagos() {
  const [mostrarImagenesOnline, setMostrarImagenesOnline] = useState(false);
  const [mostrarImagenesEfectivo, setMostrarImagenesEfectivo] = useState(false);
  const [mostrarPlinScreen, setMostrarPlinScreen] = useState(false);
  const [mostrarYapeScreen, setMostrarYapeScreen] = useState(false);
  const [mostrarTukuyScreen, setMostrarTukuyScreen] = useState(false);
  const [mostrarBancoNacionScreen, setMostrarBancoNacionScreen] = useState(false); 
  const [mostrarInterScreen, setMostrarInterScreen] = useState(false);

  const toggleImagenesOnline = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen  && !mostrarInterScreen) {
      setMostrarImagenesOnline(!mostrarImagenesOnline);
    }
  };
  
  const toggleImagenesEfectivo = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen && !mostrarInterScreen) {
      setMostrarImagenesEfectivo(!mostrarImagenesEfectivo);
    }
  };

  const mostrarPlin = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(true);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false); 
  };

  const mostrarYape = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(true);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
  };

  const mostrarTukuy = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(true);
    setMostrarBancoNacionScreen(false); 
  };

  const mostrarBancoNacion = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(true); 
    setMostrarImagenesEfectivo(false); 
  };

  const mostrarInter = () => {
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
    setMostrarInterScreen(true); 
    setMostrarImagenesEfectivo(false); 
  };

  const reiniciarEstado = () => {
    setMostrarImagenesOnline(false);
    setMostrarImagenesEfectivo(false);
    setMostrarPlinScreen(false);

    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false); 
    setMostrarInterScreen(false);
  };

  return (
    <Container className='containerPagos'>
      <Col>
        <Image src={flechaPagos} onClick={reiniciarEstado} />
      </Col>
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
            disabled={
              mostrarBancoNacionScreen ||
              mostrarPlinScreen ||
              mostrarTukuyScreen ||
              mostrarYapeScreen ||
              mostrarInterScreen
            } 
          >
            <Image src={code} className={`imageOnline `} />
            <p className={`titleOnline ${mostrarImagenesOnline ? 'active-text' : ''}`}>
              Pago online
            </p>
          </button>

            {mostrarImagenesOnline && !mostrarPlinScreen && !mostrarYapeScreen && !mostrarTukuyScreen && (
              <Row className='containerOnlinePay'>
                <Col>
                  <button
                    className={`buttonDosPay ${mostrarPlinScreen ? 'active' : ''}`}
                    onClick={() => {
                      mostrarPlin();
                    }}
                  >
                    <Col className='interBtn'>
                      <Image src={Plin} />
                      <p>plin.pe</p>
                    </Col>
                  </button>
                </Col>
                <Col>
                  <button
                    className={`buttonDosPay ${mostrarYapeScreen ? 'active' : ''}`}
                    onClick={() => {
                      mostrarYape();
                    }}
                  >
                    <Col className='interBtn'>
                      <Image src={Yape} />
                      <p>yape.com.pe</p>
                    </Col>
                  </button>
                </Col>
                <Col>
                  <button
                    className={`buttonDosPay ${mostrarTukuyScreen ? 'active' : ''}`}
                    onClick={() => {
                      mostrarTukuy();
                    }}
                  >
                    <Col className='interBtn'>
                      <Image src={tukuy} />
                      <p>tukuy.club</p>
                    </Col>
                  </button>
                </Col>
              </Row>
            )}
          </Col>

          <Col className='containerBtn'>
          <button
            className={`buttonEfectivo ${mostrarImagenesEfectivo ? 'active' : ''}`}
            onClick={toggleImagenesEfectivo}
            disabled={
              mostrarBancoNacionScreen ||
              mostrarPlinScreen ||
              mostrarTukuyScreen ||
              mostrarYapeScreen ||
              mostrarInterScreen
            } 
          >
            <Image src={efectivo} className={`imageEfectivo `} />
            <p className={`titleEfectivo ${mostrarImagenesEfectivo ? 'active-text' : ''}`}>
              Pago en efectivo
            </p>
          </button>

            {mostrarImagenesEfectivo && !mostrarPlinScreen && !mostrarYapeScreen && !mostrarTukuyScreen && (
              <Row className='containerOnlinePay'>
                <Col>
                <button
                className={`buttonDosPay ${mostrarTukuyScreen ? 'active' : ''}`}
                onClick={() => {
                  mostrarBancoNacion();
                }}
                  
                    >
                      <Col className='interBtn'>
                        <Image src={bancoNacion} />
                        <p>www.bn.com.pe</p>
                      </Col>
                    </button>
                </Col>
                <Col>
                <button
                className={`buttonDosPay ${mostrarTukuyScreen ? 'active' : ''}`}
                onClick={() => {
                  mostrarInter();
                }}
                  
                    >
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
            )}
          </Col>
        </Row>
      </Row>
      
      {mostrarYapeScreen && <YapeScreen />}
      {mostrarTukuyScreen && <TukuyScreen />}
      {mostrarBancoNacionScreen && <BancoNacion />} 
      {mostrarPlinScreen && <PlinScreen />}
      {mostrarInterScreen && <InterScreen />}
    </Container>
  );
}

export default Pagos;
