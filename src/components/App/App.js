import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Header from '../Header/Header';
import acquireInfo from '../../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';


function App() {
  const [stories, setStories] = useState([]);
  const [newError, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

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

  const filteredStories = useMemo(() => {
    return stories.filter(story =>
      story.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [stories, searchKeyword]);

  const createCard = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (newError) {
      return (
        <div className="error-message-container">
          <div className="error-message">{newError}</div>
        </div>
      );
    } else if (filteredStories.length === 0) {
      return (
        <div className="no-articles-container">
          <div className="no-articles-message">No articles found matching the provided search criteria.</div>
        </div>
      );
    } else {
      return filteredStories.map((story) => (
        <ArticleCard data={story} key={story.url} />
      ));
    }
  };

  const handleSearch = (value) => {
      setSearchKeyword(value)
  };

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Header showSearchBar={true} handleSearch={handleSearch} />
            <section className="article-card-container">
              {createCard()}
            </section>
          </Route>
          <Route exact path="/article/:url" render={({ match }) => (
          filteredStories.find(story => story.url === decodeURIComponent(match.params.url)) ? (
            <>
              <ArticleDetails data={filteredStories.find(story => story.url === decodeURIComponent(match.params.url))} />
            </>
          ) : (
            <Redirect to="/" />
          )
        )} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;

