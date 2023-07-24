import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ data, index }) => {
  return (
    <NavLink to={`/article/${index}`} className='link'>
      <div className='card-container'>
        {data.urlToImage ? (
          <img src={data.urlToImage} className='article-img' alt='US News Article' />
        ) : (
          <div className='placeholder-image'>Image Not Available</div>
        )}
        {data.title ? (
          <h2 className='title'> Headline: {data.title}</h2>
        ) : (
          <h2 className='title'>No Title Available</h2>
        )}
      </div>
    </NavLink>
  );
};

export default ArticleCard;

