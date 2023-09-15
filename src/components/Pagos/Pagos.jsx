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
import {  NavLink } from 'react-router-dom';


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



  // const toggleImagenesOnline = () => {
  //   setMostrarImagenesOnline(!mostrarImagenesOnline);
  // };

  // const toggleImagenesEfectivo = () => {
  //   setMostrarImagenesEfectivo(!mostrarImagenesEfectivo);
  // };



  const toggleImagenesOnline = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen  && !mostrarInterScreen && !mostrarBcpScreen && !mostrarBbvaScreen ) {
      setMostrarImagenesOnline(!mostrarImagenesOnline);
      setMostrarImagenesEfectivo(false);
    }
  };
  
  const toggleImagenesEfectivo = () => {
    if (!mostrarBancoNacionScreen && !mostrarPlinScreen && !mostrarTukuyScreen && !mostrarYapeScreen && !mostrarInterScreen && !mostrarBcpScreen && !mostrarBbvaScreen) {
      setMostrarImagenesEfectivo(!mostrarImagenesEfectivo);
      setMostrarImagenesOnline(false);
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
      <Row className='containerBox'>
        <Row className='parteUnoPagos'>
          <Row className='Pag'>
        <Col className='botonesPagos bUno'>
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
            <p className={`titleOnline ${mostrarImagenesOnline ? 'active-text' : ''}`}></p>
          </button>
        </Col>
 

        <Col className='botonesPagos bDos'>
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
            <p className={`titleEfectivo ${mostrarImagenesEfectivo ? 'active-text' : ''}`}> </p>
          </button>
        </Col>
        </Row>

        <Row className='flechaTitle'>
          <Col className='containerPay'>
            <h2 className='titlePay'>Selecciona un método de pago</h2>
          </Col>
        </Row>
        </Row>



        <Row className='boxRow' >
          <Col className='containerBtn' >
            
            {mostrarImagenesOnline && !mostrarPlinScreen && !mostrarYapeScreen && !mostrarTukuyScreen &&  (
              <Row className='containerOnlinePayA'>
                <Col className='botOn'>
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
                  <div
                    className={`buttonDosPay ${mostrarTukuyScreen ? 'active' : ''}`}
                    // onClick={() => {
                    //   mostrarTukuy();
                    // }}
                  >
                    <Col className='interBtn'>
                      <Image className='tuk' src={tukuy} />
                      <p>tukuy.club</p>
                    </Col>
                  </div>
                </Col>
              </Row>
            )}
          </Col>
          </Row>
          <Row className='boxRow' >
          
          <Col className='containerBtnDos'>
           
            {mostrarImagenesEfectivo && !mostrarBancoNacionScreen && !mostrarBbvaScreen && !mostrarInterScreen && !mostrarBcpScreen &&  (
              <Row className='containerOnlinePay'>
                <Col className='botonesPaym'>
                <button
                className={`buttonDosPay ${mostrarBancoNacionScreen ? 'active' : ''}`}
                onClick={() => {
                  mostrarBancoNacion();
                }}
                  
                    >
                      <Col className='interBtn'>
                        <Image  src={bancoNacion} />
                        <p>www.bn.com.pe</p>
                      </Col>
                    </button>
                </Col>
                <Col className='botonesPaym'>
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
                <Col className='botonesPaym'>
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
                <Col className='botonesPaym'>
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
      
      {mostrarYapeScreen && <YapeScreen reiniciarEstado={reiniciarEstado}  />}
      {mostrarTukuyScreen &&   <TukuyScreen reiniciarEstado={reiniciarEstado} />}
      {mostrarBancoNacionScreen && <BancoNacion reiniciarEstado={reiniciarEstado} />} 
      {mostrarPlinScreen && <PlinScreen reiniciarEstado={reiniciarEstado}  />}
      {mostrarInterScreen && <InterScreen reiniciarEstado={reiniciarEstado} />}
      {mostrarBcpScreen && <BcpScreen reiniciarEstado={reiniciarEstado} />}
      {mostrarBbvaScreen && <BbvaScreen reiniciarEstado={reiniciarEstado} />}
    </Container>
  );
}

export default Pagos;
