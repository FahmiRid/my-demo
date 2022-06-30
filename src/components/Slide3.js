import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
//import image4 from './images/image4.jpg';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={image1} onDragStart={handleDragStart} />,
  <img src={image2} onDragStart={handleDragStart} />,
  <img src={image3} onDragStart={handleDragStart} />,
];

export const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}
