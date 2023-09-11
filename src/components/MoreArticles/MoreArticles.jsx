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
        <p className='moreArticles'>Más artículos</p>
        
            <Swiper
                className='swiperMoreArticles'
                breakpoints={{
                    320: {
                      slidesPerView: 1.1,
                      spaceBetween: 20,
                    },
                    767: {
                      slidesPerView: 2.1,
                      spaceBetween: 30,
                    },
                    1920: {
                      slidesPerView: 2.7,
                      spaceBetween: 30,
                    },
                }}
            >
                {otherArticles.map(e => {
                    const {title, subtitle, image, content, author} = e;

                    const maxLengthPreview = 60;
                    const preview = content.slice(0, maxLengthPreview);
                     
                    return (
                        <SwiperSlide key={e.id}>
                            <Link to={`/blog/${e.id}`} key={e.id}>
                                <div className='swiperArticle'>
                                    <img src={image} alt={title} />
                                    <div className='swiperArticleText'>
                                        <p className='swiperSubtitle'>{subtitle}</p>
                                        <p className='swiperTitle'>{title}</p>
                                        <p className='swiperContent'>{preview}</p>
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