import { useState, useEffect } from 'react';
//hook do zboza
const useGrainStatistics = () => {
  const [grainStatistics, setGrainStatistics] = useState(null);

  useEffect(() => {
    const fetchGrainStatistics = async () => {
      
        
        const data = await response.json();
        setGrainStatistics(data);
    };

    fetchGrainStatistics();

  }, []);

  return { grainStatistics };
};

export default useGrainStatistics;
