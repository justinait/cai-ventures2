import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './MoreArticles.css'

function MoreArticles({allData, selectedArticle}) {

    const [otherArticles, setOtherArticles] = useState([]);
    
    useEffect(() => {

        let filteredArticles = allData.filter((e) => e.id !== selectedArticle);
        setOtherArticles(filteredArticles);

      }, [selectedArticle]);

  return (
    <div>
        <h3>Más artículos</h3>
        
            <Swiper
                spaceBetween={50}
                slidesPerView={2.3}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {otherArticles.map(e => {
                    const {title, subtitle, image, content, author} = e;
                            
                    return (
                        <SwiperSlide>
                            <Link to={`/blog/${e.id}`} key={e.id}>
                                <div className='swiperArticle'>
                                    <img src={image} alt={title} />
                                    <div className='swiperArticleText'>
                                        <p className='swiperSubtitle'>{subtitle}</p>
                                        <p className='swiperTitle'>{title}</p>
                                        <p className='swiperContent'>{content}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        
                    
                    )
                })}
   
            </Swiper>
       
    </div>
  )
}

export default MoreArticles