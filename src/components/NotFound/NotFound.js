import React from 'react';
import './NotFound.css';
import CatImage from '../../images/cat-back.svg';

function NotFound({ header, description }){
  return(
    <div className="notfound">
      <h2 className="notfound__heading">{header}</h2>
      <p className="notfound__paragraph">{description}</p>
      <img 
        className="notfound__image"
        src={CatImage} 
        alt="котик"
      />
    </div>
  )
}

export default NotFound;