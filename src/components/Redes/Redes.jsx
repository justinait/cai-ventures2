import { Container, Row, Col, Image } from 'react-bootstrap';
import './Redes.css';
import instaAzul from '../../assets/instaAzul.png';
import faceAzul from '../../assets/faceAzul.png';
import linkAzul from '../../assets/linkAzul.png';
import tikAzul from '../../assets/tikAzul.png';
import {  NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import instagramblog from '../../assets/icons/instagramblog.png'
import facebookblog from '../../assets/icons/facebookblog.png'
import linkedinblog from '../../assets/icons/linkedinblog.png'
import twitterblog from '../../assets/icons/twitterblog.png'

const RedesFlotantes = () => {
    const location = useLocation();
    const [blogPage, setBlogPage] = useState(false);
    const [articlePage, setArticlePage] = useState(false);
      
    useEffect(() => {

        let isBlogPage = (window.location.pathname == '/blog');
        let isArticlePage =  (window.location.pathname == '/blog/1');
        setBlogPage(isBlogPage);
        setArticlePage(isArticlePage);

    }, [location]);
    
    return (
        <>
            {blogPage ?
            <div className='blogMediaContainer'>
                <NavLink target="_blank" to="https://instagram.com/tesiscaiventures?igshid=MzRlODBiNWFlZA==" className="redesIcon">
                    <img className='instagramblog' src={instagramblog} alt="instagram" />
                </NavLink>
                <NavLink target="_blank" to="https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" className="redesIcon">
                    <img className='facebookblog' src={facebookblog} alt="facebook" />
                </NavLink>
                <NavLink target="_blank" to="https://www.linkedin.com/in/cai-ventures-3033b8271" className="redesIcon">
                    <img className='linkedinblog' src={linkedinblog} alt="linkedin" />
                </NavLink>
                <NavLink target="_blank" className='redesIcon oculto' to="https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" >
                    <img className='tiktokblog' src={twitterblog} alt="tiktok" />
                </NavLink>
            </div> 

            : 
            
            articlePage ?
                <div className='blogArticleContainer'>
                    <NavLink target="_blank" to="https://instagram.com/tesiscaiventures?igshid=MzRlODBiNWFlZA==" className="redesIcon">
                        <img className='instagramblog' src={instagramblog} alt="instagram" />
                    </NavLink>
                    <NavLink target="_blank" to="https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" className="redesIcon">
                        <img className='facebookblog' src={facebookblog} alt="facebook" />
                    </NavLink>
                    <NavLink target="_blank" to="https://www.linkedin.com/in/cai-ventures-3033b8271" className="redesIcon">
                        <img className='linkedinblog' src={linkedinblog} alt="linkedin" />
                    </NavLink>
                    <NavLink target="_blank" className='redesIcon oculto' to="https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" >
                        <img className='tiktokblog' src={twitterblog} alt="tiktok" />
                    </NavLink>
                </div> 
            :
            <Container>
                    <Row>
                        <Col className='d-flex justify-content-end position-fixed bottom-1 end-0 m-4 redesContainer'>
                            <Col className='contRedesRed'>
                            <NavLink target="_blank" to="https://instagram.com/tesiscaiventures?igshid=MzRlODBiNWFlZA==" className="redesIcon">
                                <Image className='iconImg oculto' src={instaAzul} alt="Instagram" />
                            </NavLink>
                            <NavLink target="_blank" to="https://www.facebook.com/profile.php?id=100091551814355&mibextid=LQQJ4d" className="redesIcon">
                                <Image  className=' oculto'  src={faceAzul} alt="Facebook" />
                            </NavLink>
                            <NavLink target="_blank" to="https://www.linkedin.com/in/cai-ventures-3033b8271" className="redesIcon">
                                <Image className='iconImg oculto' src={linkAzul} alt="LinkedIn" />
                            </NavLink>
                            <NavLink target="_blank" className='redesIcon oculto' to="https://www.tiktok.com/@cai.ventures?_t=8fIegwJ6QUP&_r=1" >
                                <Image className='iconImg oculto' src={tikAzul} alt="TikTok" />
                            </NavLink>
                        </Col>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default RedesFlotantes;