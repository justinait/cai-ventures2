import React, { useEffect, useState } from 'react';
import './blog.css'
import rectangleblog from '../../assets/Rectangleblog.png'
// import img1blog from '../../assets/img1blog.png'
import img2blog from '../../assets/Img2blog.png'
import img3blog from '../../assets/Img3blog.png'
import buttonshareblog from '../../assets/buttonshareblog.png'
import { Link } from 'react-router-dom';
import instagramblog from '../../assets/icons/instagramblog.png'
import facebookblog from '../../assets/icons/facebookblog.png'
import linkedinblog from '../../assets/icons/linkedinblog.png'
import twitterblog from '../../assets/icons/twitterblog.png'
const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/blog.json')
        .then((response) => response.json())
        .then((data) => setData(data.posts));
    }, []);

    return (

        <div className='containerblog'>
            <div className='principalcardblog'>
              

                <div className='titleblog'>
                    Blog de CAI Ventures
                    <p className='subtitleblog'>
                        Donde  compartimos consejos, webinars y demás
                    </p>
                  <div className='redsblog'>
                        <img  className='instagramblog' src={instagramblog} alt="instagram" />
                        <img className='facebookblog' src={facebookblog} alt="facebook" />
                        <img className='linkedinblog' src={linkedinblog} alt="linkedin" />
                        <img className='twitterblog' src={twitterblog} alt="twitter" />
                    </div> 

                </div>

            </div>

            {/* segunda carta */}

            <div className='segondcardblog'>
                {data.map(e => {
                    
                    const {title, subtitle, image, content, author} = e;
                    
                    const maxLengthPreview = 100;
                    const preview = content.slice(0, maxLengthPreview);
                     
                    return (
                        <Link to={`/blog/${e.id}`} key={e.id}>
                            <div className='card2blog'>
                                <div className='card2blogimg'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='card2blogtext'>

                                    <div className='text-section'>
                                        <p className='text-sectionSubtitle'>{subtitle}</p>
                                        <p className='text-sectionTitle'>{title}</p>
                                        <p className='text-sectionDescription'>{preview}</p>
                                    </div>

                                    <button className='buttonshareblog'>
                                        <img src={buttonshareblog} alt="" />
                                    </button>

                                </div>

                            </div>

                        </Link>
                        
                    )
                    
                })}


            </div>


        </div>
    );
};

export default Blog;