import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';


const Header = ({ showSearchBar = true, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation();

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
      handleSearch(searchTerm)
  }, [searchTerm])

  if (location.pathname.startsWith('/article')) {
    return null;
  }

  return (
    <div className='header'>
        <h1>News Reader</h1>
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

