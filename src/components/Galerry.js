import React, { useState } from 'react';
import '../styles/galerry.css';

const Gallery = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images.length) {
    return <div>No images available</div>;
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        <img src={images[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} />
      </div>
      <div className="gallery-controls">
        <span className="gallery-nav" onClick={handlePrevious}>
          &lt;
        </span>
        <span className="gallery-nav" onClick={handleNext}>
          &gt;
        </span>
      </div>
    </div>
  );
};

export default Gallery;
