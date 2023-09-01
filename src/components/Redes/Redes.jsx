import { Container, Row, Col, Image } from 'react-bootstrap';
import './Redes.css';
import instaAzul from '../../assets/instaAzul.png';
import faceAzul from '../../assets/faceAzul.png';
import linkAzul from '../../assets/linkAzul.png';
import tikAzul from '../../assets/tikAzul.png';
import {  NavLink } from 'react-router-dom';

const RedesFlotantes = () => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-end position-fixed bottom-1 end-0 m-4 redesContainer'>
                    <Col className='contRedesRed'>
                    <NavLink target="_blank" to="https://instagram.com/tesiscaiventures?igshid=MzRlODBiNWFlZA==" className="redesIcon">
                        <Image src={instaAzul} alt="Instagram" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" className="redesIcon">
                        <Image src={faceAzul} alt="Facebook" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://www.linkedin.com/in/cai-ventures-3033b8271" className="redesIcon">
                        <Image src={linkAzul} alt="LinkedIn" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" className="redesIcon">
                        <Image src={tikAzul} alt="TikTok" />
                    </NavLink>
                    </Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default RedesFlotantes;