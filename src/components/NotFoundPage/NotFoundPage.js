import React from 'react';
import './NotFoundPage.css';
import CatImage from '../../images/cat-back.svg';

function NotFoundPage(){
  return(
    <div className="notfound">
      <h2 className="notfound__heading">404</h2>
      <p className="notfound__paragraph">страница не найдена</p>
      <img 
        className="notfound__image"
        src={CatImage} 
        alt="котик"
      />
    </div>
  )
}

export default NotFoundPage;