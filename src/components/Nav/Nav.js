import React from 'react';
import './Nav.css';

import NavItem from '../NavItem/NavItem';

function Nav(){
  return(
    <nav className="nav">
      <NavItem 
        itemText="Все котики"
      />
      <NavItem 
        itemText="Любимые котики"
      />
    </nav>
  )
}

export default Nav;