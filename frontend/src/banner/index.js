import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './pictures/pszenica.png',
    './pictures/zyto.png',
    './pictures/pszenzyto.png'
  ];

  let counter = 1;

  const handleClick = () => {
    if (counter > 7) counter = 1;
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    const element = document.getElementById(String(counter));
    if (element) {
      const yOffset = -100; // Adjust as needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    counter++;
  };

  return (
    <div className="banner" onClick={handleClick}>
      <img
        src={require(`${images[currentImage]}`)}
        alt={`Banner ${currentImage + 1}`}
        className="fade"
      />
    </div>
  );
};

export default Banner;
