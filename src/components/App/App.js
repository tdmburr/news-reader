import './App.css';
import React, { useEffect, useState } from 'react';
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

  const createCard = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (newError) {
      return <p>{newError}</p>;
    } else {

      const filteredStories = stories.filter(story => story.title.toLowerCase().includes(searchKeyword.toLowerCase()));

      return filteredStories.map((story, i) => (
        <ArticleCard data={story} key={i} index={i} />
      ));
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Header showSearchBar={true} handleSearch={handleSearch} />
            <section className="article-card-container">{createCard()}</section>
          </Route>
          <Route exact path="/article/:index" render={({ match }) => (
            stories[match.params.index] ? (
              <>
                <Header showSearchBar={false} />
                <ArticleDetails data={stories[match.params.index]} />
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
