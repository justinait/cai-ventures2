import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function MoreArticles({allData, selectedArticle}) {

    const [otherArticles, setOtherArticles] = useState([]);
    
    useEffect(() => {

        let filteredArticles = allData.filter((e) => e.id !== selectedArticle);
        setOtherArticles(filteredArticles);

      }, [selectedArticle]);

  return (
    <div>
        <h3>Más artículos</h3>
        {otherArticles.map(e => {
            
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


                        </div>

                    </div>

                </Link>
                
            )
        })
        }
       
    </div>
  )
}

export default MoreArticles