import React from 'react';
import Slider from 'react-slick';
import { MemeItem } from './meme-item';

export const MemeList = ({ memes, current, onEachClick }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true
  };
  return (
    <div>
      <Slider {...settings}>
        {memes &&
          memes.map(each => (
            <MemeItem
              key={each.id}
              {...each}
              selected={current && each.id === current.id}
              onClick={() => onEachClick(each)}
            />
          ))}
      </Slider>
    </div>
  );
};
