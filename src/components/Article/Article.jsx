import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css'
import MoreArticles from '../MoreArticles/MoreArticles';

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
      <div className='principalCardArticle'>

        <div className='titleArticle'>
          Blog de CAI Ventures
          <p className='subtitleArticle'>
            Donde  compartimos consejos, webinars y demás
          </p>
        </div>

        </div>
      <div className='articleCard'>
        <p className='articleTitle'>{title}</p>
        
        <img src={image}  className='articleImage'  />
        
        <div className='articleTextContainer'>
          <h4>Autora: {author}</h4>
          <p className='articleContent'>{content}</p>
          
        </div>

      </div>
      <MoreArticles allData={data} selectedArticle={thisArticle.id} />
    </div>
    
  )
}

export default Article