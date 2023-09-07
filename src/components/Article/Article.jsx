import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Article() { 

  const [data, setData] = useState([]);
  const [thisArticle, setThisArticle] = useState({})

  const {id} = useParams();

  useEffect(() => {
    fetch('/data/blog.json')
      .then((response) => response.json())
      .then((responseData) => {
        
        setData(responseData.posts);
        setThisArticle(responseData.posts[id - 1]);
      
      });
  }, [id]);

  const {title, subtitle, image, content, author} = thisArticle;

  return (
    <div>
      <div className='card2blog'>
        <div className='card2blogimg'>
          <img src={image}   />
        </div>
        <div className='card2blogtext'>

          <div className='text-section'>
            <p className='text-sectionSubtitle'>{subtitle}</p>
            <p className='text-sectionTitle'>{title}</p>
            <p className='text-sectionDescription'>{content}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Article