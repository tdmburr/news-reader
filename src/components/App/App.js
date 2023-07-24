import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Header from '../Header/Header';
import acquireInfo from '../../apiCalls';
import ArticleCard from '../ArticleCard/ArticleCard';

function App() {
  const [stories, setStories] = useState([]);
  const [newError, setError] = useState('');
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
        <ArticleCard data={story} key={i} index={i} />
      ));
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <section className="article-card-container">{createCard()}</section>
          </Route>
          <Route exact path="/article/:index" render={({ match }) => (
            stories[match.params.index] ? (
              <ArticleDetails data={stories[match.params.index]} />
            ) : (
              <Redirect to="/" />
            )
          )} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
