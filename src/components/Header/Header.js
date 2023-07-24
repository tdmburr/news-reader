import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='link'>
        <h1>News Reader</h1>
      </Link>
      <form>
        <input type='search' placeholder='Article Search' className='search-bar' required />
      </form>
    </div>        
  )
}

export default Header;