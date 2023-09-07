import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'

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
    <div className='articleCard'>
      <h3>{title}</h3>
      <div className='articleImage'>
        <img src={image}   />
      </div>
      <div className=''>
        <h6>{author}</h6>
        <div className=''>
          <p className=''>{content}</p>
        </div>

      </div>

    </div>
  )
}

export default Article