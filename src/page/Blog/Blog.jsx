import React, { useEffect, useState } from 'react';
import './blog.css'
import rectangleblog from '../../assets/Rectangleblog.png'
import img1blog from '../../assets/img1blog.png'
import img2blog from '../../assets/Img2blog.png'
import img3blog from '../../assets/Img3blog.png'
import buttonshareblog from '../../assets/buttonshareblog.png'

const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/blog.json')
        .then((response) => response.json())
        .then((data) => setData(data.posts));
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

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
                    console.log(e);
                    return (
                        <div className='card2blog'>
                            <div className='card2blogimg'>
                                <img src={e.image} alt={e.title} />
                            </div>
                            <div className='card2blogtext'>


                                <div className='text-section'>
                                    <p className='text-sectionSubtitle'>{e.subtitle}</p>
                                    <p className='text-sectionTitle'>{e.title}</p>
                                    <p className='text-sectionDescription'>{e.content}</p>
                                </div>

                                <button className='buttonshareblog'>
                                    <img src={buttonshareblog} alt="" />
                                </button>

                            </div>

                        </div>

                    )
                    
                })}


            </div>


        </div>
    );
};

export default Blog;