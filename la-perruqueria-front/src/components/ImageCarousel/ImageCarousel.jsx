import "./ImageCarousel.scss";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CustomImage from './CustomImage/CustomImage.jsx';
import React, { useState } from 'react';
import AddImageModal from '../AddImageModal/AddImageModal.jsx';

const ImageCarousel = ({ images: initialImages }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState(initialImages || []);

  const handleDragStart = (e) => e.preventDefault();

  const handleAddImage = (url) => {
    setImages([url, ...images]);
  };

  const items = images.map((image, idx) =>
    <CustomImage key={idx} src={image} onDragStart={handleDragStart}/>
  );

  return (
    <div style={{ position: 'relative' }}>
      <button
        className="add-comment-btn"
        onClick={() => setModalOpen(true)}
      >
        Agregar imagen
      </button>
      <AddImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddImage}
      />
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        paddingLeft={60}
        disableDotsControls={true}
        disableSlideInfo={true}
        autoWidth={false}
        responsive={
          {
            0: {
              items: 1,
            },
            480: {
              items: 1.3
            },
            600: {
              items: 2,
              itemsFit: 'contain',
            },
            1024: {
              items: 3,
              itemsFit: 'contain',
            }
          }
        }
      />
    </div>
  );
};

export default ImageCarousel;