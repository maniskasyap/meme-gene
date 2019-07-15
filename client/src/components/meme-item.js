import React from 'react';

export const MemeItem = ({ url, name, onClick }) => {
  return (
    <figure className="meme-slide" onClick={onClick}>
      <img src={url} alt={name} style={{ width: '200px', height: '200px' }} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};
