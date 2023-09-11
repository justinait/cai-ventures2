import React, { useState } from 'react';
import './Pagos.css';
import Plin from '../../assets/plin.png';
import Yape from '../../assets/yape.png';
import tukuy from '../../assets/tukuy.png';
import code from '../../assets/code.svg';
import efectivo from '../../assets/efectivo.svg';
import bancoNacion from '../../assets/bancoNacion.png';
import interBank from '../../assets/interBank.png';
import bcpPagos from '../../assets/bcpPagos.png';
import bbvaPagos from '../../assets/bbvaPagos.png';
import { Container, Image, Col, Row } from 'react-bootstrap';
import YapeScreen from './Pantallas/Yape';
import TukuyScreen from './Pantallas/Tukuy';
import PlinScreen from './Pantallas/Plin';
import BancoNacion from './Efectivo/BancoNacion'; 
import flechaPagos from '../../assets/flechaPagos.svg';
import InterScreen from './Efectivo/InterBanck';
import BcpScreen from './Efectivo/Bcp';
import BbvaScreen from './Efectivo/Bbva';

function Pagos() {
  const [mostrarImagenesOnline, setMostrarImagenesOnline] = useState(false);
  const [mostrarImagenesEfectivo, setMostrarImagenesEfectivo] = useState(false);
  const [mostrarPlinScreen, setMostrarPlinScreen] = useState(false);
  const [mostrarYapeScreen, setMostrarYapeScreen] = useState(false);
  const [mostrarTukuyScreen, setMostrarTukuyScreen] = useState(false);
  const [mostrarBancoNacionScreen, setMostrarBancoNacionScreen] = useState(false); 
  const [mostrarInterScreen, setMostrarInterScreen] = useState(false);
  const [mostrarBcpScreen, setMostrarBcpScreen] = useState(false);
  const [mostrarBbvaScreen, setMostrarBbvaScreen] = useState(false);

  const toggleImagenesOnline = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen  && !mostrarInterScreen && !mostrarBcpScreen && !mostrarBbvaScreen) {
      setMostrarImagenesOnline(!mostrarImagenesOnline);
    }
  };
  
  const toggleImagenesEfectivo = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen && !mostrarInterScreen && !mostrarBcpScreen && !mostrarBbvaScreen) {
      setMostrarImagenesEfectivo(!mostrarImagenesEfectivo);
    }
  };

  const mostrarPlin = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(true);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false); 
    setMostrarBcpScreen(false);
    setMostrarBbvaScreen(false);
  };

  const mostrarYape = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(true);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
    setMostrarBcpScreen(false);
    setMostrarBbvaScreen(false);
  };

  const mostrarTukuy = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(true);
    setMostrarBancoNacionScreen(false); 
    setMostrarBcpScreen(false);
    setMostrarBbvaScreen(false);
  };

  const mostrarBancoNacion = () => {
    setMostrarInterScreen(false);
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(true); 
    setMostrarImagenesEfectivo(false); 
    setMostrarBcpScreen(false);
    setMostrarBbvaScreen(false);
  };

  const mostrarInter = () => {
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
    setMostrarInterScreen(true); 
    setMostrarImagenesEfectivo(false);
    setMostrarBcpScreen(false); 
    setMostrarBbvaScreen(false);
  };

  const mostrarBcp = () => {
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
    setMostrarInterScreen(false); 
    setMostrarImagenesEfectivo(false);
    setMostrarBcpScreen(true); 
    setMostrarBbvaScreen(false);
  };

  const mostrarBbva = () => {
    setMostrarPlinScreen(false);
    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false);
    setMostrarInterScreen(false); 
    setMostrarImagenesEfectivo(false);
    setMostrarBcpScreen(false); 
    setMostrarBbvaScreen(true);
  };

  const reiniciarEstado = () => {
    setMostrarImagenesOnline(false);
    setMostrarImagenesEfectivo(false);
    setMostrarPlinScreen(false);

    setMostrarYapeScreen(false);
    setMostrarTukuyScreen(false);
    setMostrarBancoNacionScreen(false); 
    setMostrarInterScreen(false);
    setMostrarBcpScreen(false);
    setMostrarBbvaScreen(false)
  };

  return (
    
    <Container className='containerPagos'>
      
      <Col>
      <button className='buttonPagos' onClick={reiniciarEstado}>
        <Image src={flechaPagos} />
      </button>
      </Col>
      <Row>
        <Col className='containerPay'>
          <h2 className='titlePay'>Selecciona un método de pago</h2>
        </Col>
      </Row>
      <Row className='containerBox'>
        <Row className='boxRow'>
          <Col className='containerBtn' >
          <button
            className={`buttonOnline ${mostrarImagenesOnline ? 'active' : ''}`}
            onClick={toggleImagenesOnline}
            disabled={
              mostrarBancoNacionScreen ||
              mostrarPlinScreen ||
              mostrarTukuyScreen ||
              mostrarYapeScreen ||
              mostrarBcpScreen ||
              mostrarBbvaScreen ||
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
              mostrarInterScreen ||
              mostrarBcpScreen ||
              mostrarBbvaScreen
            } 
          >
            <Image src={efectivo} className={`imageEfectivo `} />
            <p className={`titleEfectivo ${mostrarImagenesEfectivo ? 'active-text' : ''}`}>
              Pago en efectivo
            </p>
          </button>

            {mostrarImagenesEfectivo && !mostrarBancoNacionScreen && !mostrarBbvaScreen && !mostrarInterScreen && !mostrarBcpScreen &&  (
              <Row className='containerOnlinePay'>
                <Col>
                <button
                className={`buttonDosPay ${mostrarBancoNacionScreen ? 'active' : ''}`}
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
                className={`buttonDosPay ${mostrarInterScreen ? 'active' : ''}`}
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
                  <button className={`buttonDosPay ${mostrarBcpScreen ? 'active' : ''}`}
                  onClick={() => {
                    mostrarBcp();
                  }}
                  >
                    <Col className='interBtn'>
                      <Image src={bcpPagos} />
                      <p>www.viabcp.pe</p>
                    </Col>
                  </button>
                </Col>
                <Col>
                  <button className={`buttonDosPay ${mostrarBbvaScreen ? 'active' : ''}`}
                  onClick={() => {
                    mostrarBbva();
                  }}
                  >
                    <Col className='interBtn'>
                      <Image src={bbvaPagos} />
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
      {mostrarBcpScreen && <BcpScreen />}
      {mostrarBbvaScreen && <BbvaScreen />}
    </Container>
  );
}

export default Pagos;
