import React, { useEffect, useState } from 'react';
import './blog.css'
import rectangleblog from '../../assets/Rectangleblog.png'
import img1blog from '../../assets/img1blog.png'
import img2blog from '../../assets/Img2blog.png'
import img3blog from '../../assets/Img3blog.png'
import buttonshareblog from '../../assets/buttonshareblog.png'
import { Link } from 'react-router-dom';

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

                </div>

            </div>

            {/* segunda carta */}

            <div className='segondcardblog'>
                {data.map(e => {
                    
                    const {title, subtitle, image, content, author} = e;
                    
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
                                        <p className='text-sectionDescription'>{content}</p>
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