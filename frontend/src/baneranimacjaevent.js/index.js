import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="banner" onClick={handleClick}>
      <img
        src={require(`./images/${images[currentImage]}`)}
        alt={`Banner ${currentImage + 1}`}
        className="fade"
      />
    </div>
  );
};

export default Banner;
