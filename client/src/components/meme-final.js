import React from 'react';

export const MemeFinal = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div>
      <figure className="meme-final">
        <img
          src={item.url}
          alt={item.name}
          style={{ maxWidth: '500px' }}
        />
        <figcaption>{item.name}</figcaption>
      </figure>
    </div>
  );
};
