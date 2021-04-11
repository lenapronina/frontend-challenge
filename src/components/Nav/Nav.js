import React,  { useState, useEffect, useCallback } from 'react';
import './Nav.css';

import NavItem from '../NavItem/NavItem';

function Nav({
  path,
  handleAllCatsClick,
  handleLikedCatsClick,
}){

  // states for navitems
  const [activeAllCatsButton, setActiveAllCatsButton] = useState(false);
  const [activeLikedCatsButton, setActiveLikedCatsButton] = useState(false);

  // manage navitem active state with router path
  const isButtonActive = useCallback(() => {
    if(path ==='/all-cats'){
      setActiveAllCatsButton(true);
      setActiveLikedCatsButton(false);
    }

    if(path ==='/liked-cats'){
      setActiveLikedCatsButton(true);
      setActiveAllCatsButton(false);
    }

    if(path ==='/not-found'){
      setActiveLikedCatsButton(false);
      setActiveAllCatsButton(false);
    }
  },[path]);

  // useEffect that checks every changing in isButtonActive callback
  useEffect(()=>{
    isButtonActive();
  }, [isButtonActive]);

  return(
    <nav className="nav">
      <NavItem
        activeState={activeAllCatsButton}
        handleClick={handleAllCatsClick} 
        itemText="Все котики"
      />
      <NavItem
        activeState={activeLikedCatsButton}
        handleClick={handleLikedCatsClick} 
        itemText="Любимые котики"
      />
    </nav>
  )
}

export default Nav;