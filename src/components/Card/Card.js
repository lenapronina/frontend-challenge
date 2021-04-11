import React, { useState, useCallback, useEffect } from 'react';
import './Card.css';

import LikeButton from '../LikeButton/LikeButton';

function Card({
  cardItem,
  handleLike,
  handleDislike,
  savedCards,
  path,
  isDisabled
}){

  // state for managing likeButton (style);
  const [isLiked, setIsLiked] = useState(false);

  const likeCat = () => {
    handleLike(cardItem);
  }

  const dislikeCat = () => {
    handleDislike(cardItem);
  }

  // check that cat has saved
  const checkLike = useCallback(() => {
   
    const likedItem = savedCards.some((item) => item.id === cardItem.id);

    // toggle isLiked state
    if(likedItem){
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const toggleLike = () =>{
    checkLike()
    if(isLiked){
      setIsLiked(false);
      dislikeCat();
    } else {
      setIsLiked(true);
      likeCat();
    }
  }
  
    useEffect(()=> {
      checkLike();
    }, [checkLike, path]);
  
  return(
    <li className="card" style={{ backgroundImage:`url(${cardItem.url})` }}>
      <LikeButton
        isDisabled={isDisabled}
        handleLike={toggleLike}
        isLiked={isLiked}
      />
    </li>
  )
}

export default Card;