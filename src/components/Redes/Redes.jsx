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
                <Col>
                    <NavLink>
                        <Image src={instaRed} />
                    </NavLink>
                    <NavLink>
                        <Image src={faceRed} />
                    </NavLink>
                    <NavLink>
                        <Image src={linkedinRed} />
                    </NavLink>
                    <NavLink>
                        <Image src={tiktokRed} />
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default RedesFlotantes;