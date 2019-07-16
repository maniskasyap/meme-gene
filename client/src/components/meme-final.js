import React from 'react';

export const MemeFinal = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="meme-final">
      <figure className="meme-final__fig h-100">
        <img src={item.url} alt={item.name} />
      </figure>
    </div>
  );
};
