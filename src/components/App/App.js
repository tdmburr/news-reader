import './App.css';
import { useEffect, useState } from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import Header from '../Header/Header'
import acquireInfo from '../../apiCalls'
import ArticleCard from '../ArticleCard/ArticleCard';


function App() {

  const [stories, setStories] = useState('')
  const [newError, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    acquireInfo()
      .then(data => {
        setStories(data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError('Error fetching data:', error);
      });
  }, []);

  const createCard = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (newError) {
      return <p>{newError}</p>;
    } else {
      return stories.map((story, i) => (
        <NavLink to={`/article/${i}`} className='link' key={i}>
          <ArticleCard data={story} key={i} />
        </NavLink>
      ));
    }
  };

  return (
    <div>
      <Header />
      { stories && 
        <section className="article-card-container">
          {createCard()}
        </section>
      }
      
    </div>
  )
}

export default App;
