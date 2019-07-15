import React from 'react';
import Slider from 'react-slick';
import { MemeItem } from './meme-item';

export const MemeList = ({ memes }) => {
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
        {memes && memes.map(each => <MemeItem key={each.id} {...each} />)}
      </Slider>
    </div>
  );
};
