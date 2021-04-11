import React from 'react';
import Card from '../Card/Card';

const LikedCats = ({
  path,
  catData,
  handleLike,
  handleDislike,
  savedCards
} ) =>{
  return(
    <ul className="card-list">
{
      catData.map((item, index) => (
        <Card
          path={path} 
          key={index}
          cardItem={item}
          handleLike={handleLike}
          handleDislike={handleDislike}
          savedCards={savedCards}
        />
      ))
      }
    </ul>
  )
}

export default LikedCats;