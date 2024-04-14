import React, { useState, useEffect } from 'react';

// Import your images
import pszenicaImage from './pictures/pszenica.png';
import pszenzytoImage from './pictures/pszenzyto.png';
import zytoImage from './pictures/zyto.png';
import kukurydzaImage from './pictures/kukurydza.png';
import owiesImage from './pictures/owies.png';
import jeczmienImage from './pictures/jeczmien.png';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [
    pszenicaImage,
    pszenzytoImage,
    zytoImage,
    kukurydzaImage,
    owiesImage,
    jeczmienImage
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageCount = bannerImages.length;

      // Calculate the threshold as a percentage of the viewport height
      const thresholdPercentage = 30; // Adjust this value as needed
      const threshold = (window.innerHeight * thresholdPercentage) / 100;

      // Calculate the maximum scroll position for the images
      const maxScrollPosition = (imageCount - 1) * threshold;

      // Calculate the current index based on scroll position
      let newIndex = Math.floor(scrollPosition / threshold);

      // Ensure the index doesn't exceed the maximum index
      if (newIndex >= imageCount) {
        newIndex = imageCount - 1;
      }

      setCurrentImageIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bannerImages]);

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <img src={bannerImages[currentImageIndex]} alt="Banner" style={{ width: '100%', height: '300px'}} />
    </div>
  );
};

export default Banner;
