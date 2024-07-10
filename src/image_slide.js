import React, { useState } from 'react';

function ImageSlider() {
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <img src={imageUrls[currentIndex]} alt={`Image ${currentIndex}`} />

      <button onClick={previousImage} disabled={currentIndex === 0}>
        Previous
      </button>

      <button onClick={nextImage} disabled={currentIndex === imageUrls.length - 1}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;