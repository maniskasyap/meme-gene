import React from 'react';

export const MemeItem = item => {
  return (
    <div>
      <figure className="meme-slide">
        <img src={item.url} alt={item.name} style={{width:'200px', height: '200px'}}/>
        <figcaption>{item.name}</figcaption>
      </figure>
    </div>
  );
};
