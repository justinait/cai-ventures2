import { Container, Row, Col, Image } from 'react-bootstrap';
import './Redes.css';
import instaAzul from '../../assets/instaAzul.png';
import faceAzul from '../../assets/faceAzul.png';
import linkAzul from '../../assets/linkAzul.png';
import tikAzul from '../../assets/tikAzul.png';
import whatsBlanco from '../../assets/whatsBlanco.png';
import {  NavLink } from 'react-router-dom';

const RedesFlotantes = () => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-end position-fixed bottom-1 end-0 m-4 redesContainer'>
                    <Col className='contRedesRed'>
                    <NavLink target="_blank" to="https://instagram.com/tesiscaiventures?igshid=MzRlODBiNWFlZA==" className="redesIcon">
                        <Image className='iconImg oculto' src={instaAzul} alt="Instagram" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" className="redesIcon">
                        <Image  className=' oculto'  src={faceAzul} alt="Facebook" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://www.linkedin.com/in/cai-ventures-3033b8271" className="redesIcon">
                        <Image className='iconImg oculto' src={linkAzul} alt="LinkedIn" />
                    </NavLink>
                    <NavLink target="_blanck" className='redesIcon oculto' to="https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" >
                        <Image className='iconImg oculto' src={tikAzul} alt="TikTok" />
                    </NavLink>
                    <NavLink target="_blanck" to="https://wa.link/xn96ef"  className="whatsBlanco">
                        <Image src={whatsBlanco} alt="whatsapp" className="redesIcon whatsappImg" />
                    </NavLink>
                </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default RedesFlotantes;