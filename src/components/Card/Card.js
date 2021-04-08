import React from 'react';
import './Card.css';

import LikeButton from '../LikeButton/LikeButton';

function Card(){
  return(
    <li className="card">
      <LikeButton />
    </li>
  )
}

export default Card;