import React from 'react';
import './CardsList.css';

import Card from '../Card/Card';
import MoreCatsLoading from '../MoreCatsLoading/MoreCatsLoading';

const CardsList = React.forwardRef((
{
  imgData,
  handleLike,
  handleDislike,
  savedCards,
  path,
  isDisabled
}, ref) => {

  return (
    <>
    <ul className="card-list">{
      imgData.images.map((image, index) => (
        <Card
          isDisabled={isDisabled}
          path={path} 
          key={index}
          cardItem={image}
          handleLike={handleLike}
          handleDislike={handleDislike}
          savedCards={savedCards}
        />
      ))
      }
    </ul>
    { imgData.fetching && (<MoreCatsLoading />)}
    <div
      className='card-list__bottom-boundary'
      ref={ref} 
    />
    </>
  )
} );

export default CardsList;

