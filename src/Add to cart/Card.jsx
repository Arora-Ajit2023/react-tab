// @ts-nocheck
import React, { useState } from 'react';

const Card = ({ name, id }) => {
  const [IsClick, setIsClick] = useState(false);
  const handalClcik = (id) => {
    setIsClick(true);
  };
  return (
    <div>
      <p>{name}</p>
      <button
        onClick={() => {
          handalClcik(id);
        }}
        disabled={IsClick}
      >
        {IsClick ? 'Added in the cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default Card;
