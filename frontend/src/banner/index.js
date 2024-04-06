import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './pictures/pszenica.png',
    './pictures/zyto.png',
    './pictures/pszenzyto.png'
  ];

  let counter=1;

  const handleClick = () => {
    if(counter > 7) counter = 1;
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    $('html,body').animate({
      scrollTop: $("#"+counter).offset().top},
      'slow');
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
