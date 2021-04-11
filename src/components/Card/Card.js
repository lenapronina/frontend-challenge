import React, { useState, useCallback, useEffect } from 'react';
import './Card.css';

import LikeButton from '../LikeButton/LikeButton';

function Card({
  cardItem,
  handleLike,
  handleDislike,
  savedCards,
  path
}){

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

    if(likedItem){
      setIsLiked(true);
    } else {
      setIsLiked(false)
    }
  
  }, [])
  
    const removeCat = (catItem, savedItems)=>{
      const removedCat = savedItems.find(item => item.id === catItem.id);
      return removedCat;
    }
  
    const toggleLike = () =>{
      checkLike()
      if(isLiked){
        setIsLiked(false);
        //dislikeCat(image);
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
        handleLike={toggleLike}
        isLiked={isLiked}
      />
    </li>
  )
}

export default Card;