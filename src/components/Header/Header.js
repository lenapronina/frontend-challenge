import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'

function Header({
  path,
  handleAllCatsClick, 
  handleLikedCatsClick,
}){
  return(
    <header className="header">
      <Nav
        path={path} 
        handleAllCatsClick={handleAllCatsClick}
        handleLikedCatsClick={handleLikedCatsClick}
      />
    </header>
  )
}

export default Header;