import React from 'react';
import './NavItem.css';

function NavItem({itemText}){
  return(
    <button className="nav__item">{itemText}</button>
  )
}

export default NavItem;