import { useState, useEffect } from 'react';

const useGrainStatistics = (grainId) => {
  const [grainStatistics, setGrainStatistics] = useState(null);

  useEffect(() => {
    const fetchGrainStatistics = async () => {
      try {
        const response = await fetch(`https://api.example.com/grain-statistics/${grainId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch grain statistics');
        }
        const data = await response.json();
        setGrainStatistics(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGrainStatistics();

  }, [grainId]);

  return { grainStatistics };
};

export default useGrainStatistics;
