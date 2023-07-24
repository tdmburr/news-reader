import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>News Reader</h1>
      <form>
        <input type='search' placeholder='Article Search' className='search-bar' required />
      </form>
    </div>        
  )
}

export default Header;