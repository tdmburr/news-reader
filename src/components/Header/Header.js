import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useParams, useLocation } from 'react-router-dom';


const Header = ({ showSearchBar = true, handleSearch }) => {
  const params = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation();

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
      handleSearch(searchTerm)
  }, [searchTerm])

  useEffect(() => {
    setSearchTerm('')
  }, [params.index])

  if (location.pathname.startsWith('/article')) {
    return null;
  }

  return (
    <div className='header'>
      <Link to='/' className='link'>
        <h1>News Reader</h1>
      </Link>
      {showSearchBar && (
        <form>
          <input
            type='search'
            placeholder='Article Search'
            className='search-bar'
            onChange={(e) => handleChange(e)}
            required
          />
        </form>
      )}
    </div>
  );
};

export default Header;

