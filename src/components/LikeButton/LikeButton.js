import React from 'react';
import './LikeButton.css';

function LikeButton ({
  handleLike,
  isLiked
}) {


  const isLikedClassName = isLiked ? 'like-button_active' : '';

  return(
    <button 
      className={`like-button ${isLikedClassName}`}
      onClick={handleLike}
    ></button>
  )
}

export default LikeButton;