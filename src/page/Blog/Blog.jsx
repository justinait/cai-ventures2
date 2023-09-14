import React, { useEffect, useState } from 'react';
import './blog.css'
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
                    
                    const maxLengthPreview = 100;
                    const preview = content.slice(0, maxLengthPreview);
                     
                    return (
                        
                            <div className='card2blog'>
                                 <Link to={`/blog/${e.id}`} key={e.id}>
                                    <div className='card2blogimg'>
                                        <img src={image} alt={title} />
                                    </div>
                                    
                                 </Link>
                                <div className='card2blogtext'>
                                    <Link to={`/blog/${e.id}`} key={e.id}>
                                        <div className='text-section'>
                                            <p className='text-sectionSubtitle'>{author}</p>
                                            <p className='text-sectionTitle'>{title}</p>
                                            <p className='text-sectionDescription'>{subtitle}</p>
                                        </div>
                                    </Link>
                                    <button className='buttonshareblog'>
                                        
                                        <div data-href="https://www.caiventuresconsultoria.com/blog" data-layout="" data-size="">
                                            <a target="_blank" href= {`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.caiventuresconsultoria.com%2Fblog%2F${e.id}&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore">    
                                                <img src={buttonshareblog} alt="Compartir en Facebook" />
                                            </a>
                                        </div>
                                    </button>

                                </div>

                            </div>

                        
                    )
                    
                })}


            </div>

            <p className='blogSoon'>Pronto tendrás acceso a más contenidos</p>
            
        </div>
    );
};

export default Blog;