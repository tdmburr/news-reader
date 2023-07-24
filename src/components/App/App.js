import './App.css';
import { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import Header from '../Header/Header'
import acquireInfo from '../../apiCalls'


function App() {

  const [stories, setStories] = useState('')
  const [newError, setError] = useState('')

  useEffect(() => {
    acquireInfo()
    .then(data => console.log(data.articles))
  }, [])

  return (
    <div>
      <Header />

    </div>
  )
}

export default App;
