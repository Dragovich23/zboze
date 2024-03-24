import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './pictures/pszenica.png',
    './pictures/zyto.png',
    './pictures/pszenzyto.png'
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
