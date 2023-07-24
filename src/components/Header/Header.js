import React from 'react'

const Header = () => {
  return (
    <div>
    <h1>News Reader</h1>
      <form>
        <input type='search' placeholder='Article Search' className='search-bar' required />
      </form>
    </div>        
  )
}

export default Header;