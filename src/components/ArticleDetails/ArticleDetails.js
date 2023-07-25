import React from 'react';
import './ArticleDetails.css';

const formatPublishedDate = (publishedAt) => {
  const dateObj = new Date(publishedAt);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  };
  return dateObj.toLocaleString('en-US', options);
};

const ArticleDetails = ({ data }) => {
  const { author, title, description, urlToImage, publishedAt, content } = data;
  const formattedPublishedAt = formatPublishedDate(publishedAt);

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <div className="article-details-container">
      {urlToImage && <img className="article-image" src={urlToImage} alt="Article" />}
      <h2 className="article-title">{title}</h2>
      {author && <p className="article-author">Author: {author}</p>}
      <p className="article-published-date">Published At: {formattedPublishedAt}</p>
      <p className="article-description">{description}</p>
      {content && <p className="article-content">{content}</p>}
      <div className="refresh-button-container">
        <button className="refresh-button" onClick={handleRefreshClick}>
          Return Home
        </button>
      </div>
    </div>
  );
};


export default ArticleDetails;