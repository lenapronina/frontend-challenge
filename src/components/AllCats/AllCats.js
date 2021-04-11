import React from 'react';
import './AllCats.css';

import CardsList from '../CardsList/CardsList';

const AllCats = React.forwardRef((
{ imgData,
  handleLike,
  handleDislike,
  savedCards,
  path
}, ref ) => {
  
  return(
    <CardsList
      path={path}
      handleLike={handleLike}
      handleDislike={handleDislike} 
      imgData={imgData}
      ref={ref}
      savedCards={savedCards}
    />
  )
})

export default AllCats;