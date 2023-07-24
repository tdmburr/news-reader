// A list of articles (headline, image, description if present, date)
// A “detailed” view for each article (headline, image, date, content, source)
// Articles in the list must link to a detailed article view within your app (linking to the source website does not fulfill this requirement)
// Some sort of search, filter, OR sort

import React from 'react'

const ArticleCard = ( { data } ) => {
  return (
    <div className='article-container'>
      <img src={data.urlToImage} className='article-img' alt='World News Article'/>
      <h2 className='title'>{data.title}</h2>
      
    </div>
  )
}

export default ArticleCard;

