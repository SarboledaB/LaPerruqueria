import './Album.scss';
import ImageCarousel from '../ImageCarousel/ImageCarousel.jsx';
import HeaderDivider from '../HeaderDivider/HeaderDivider.jsx';
import React from 'react';
const Album = () => {

  const handleDragStart = (e) => e.preventDefault();

  const images = [
    'https://petpix.co/wp-content/uploads/Koda-Border-Collie00637-2.jpg',
    'https://petpix.co/wp-content/uploads/3-Chow-Chow00802_2-1.jpg',
    'https://petpix.co/wp-content/uploads/ZAT8379-scaled.jpg',
    'https://petpix.co/wp-content/uploads/PET4029-1.jpg',
    'https://petpix.co/wp-content/uploads/Milo-Border-Collie-10996-1.jpg',
    'https://petpix.co/wp-content/uploads/Diana-Ortiz-Gatos01212-1.jpg'
  ]


  return (
    <div>
      <HeaderDivider title={'Modelos con Patas y Mucho Estilo '} />
      {<ImageCarousel images={images} />}
    </div>
  );
};

export default Album;
