import { Container, Row, Col, Image } from 'react-bootstrap';
import './Redes.css';
import instaRed from '../../assets/instagramRed.png';
import faceRed from '../../assets/facebookRed.png';
import linkedinRed from '../../assets/linkedinRed.png';
import tiktokRed from '../../assets/tiktokRed.png';
import {  NavLink } from 'react-router-dom';

const RedesFlotantes = () => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-end position-fixed bottom-1 end-0 m-4 redesContainer'>
                    <Col className='contRedesRed'>
                    <NavLink to="#" className="redesIcon">
                        <Image src={instaRed} alt="Instagram" />
                    </NavLink>
                    <NavLink to="#" className="redesIcon">
                        <Image src={faceRed} alt="Facebook" />
                    </NavLink>
                    <NavLink to="#" className="redesIcon">
                        <Image src={linkedinRed} alt="LinkedIn" />
                    </NavLink>
                    <NavLink to="#" className="redesIcon">
                        <Image src={tiktokRed} alt="TikTok" />
                    </NavLink>
                    </Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default RedesFlotantes;