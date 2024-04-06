import { useState, useEffect } from 'react';

const useGrainStatistics = (grainId) => {
  const [grainStatistics, setGrainStatistics] = useState(null);

  useEffect(() => {
    const fetchGrainStatistics = async () => {
      try {
        const response = await fetch('./statistics');
        if (!response.ok) {
          throw new Error('Nie udało się załadować statystyk');
        }
        const textData = await response.text();
        const lines = textData.split('|');
        const data = lines.map(line => {
          const [id, zboze, cena, name, yieldValue, production] = line.split(', ');
          return { id: id, zboze, cena: cena, name, yield: yieldValue, production: production };
        });
        const statistics = data.find(stat => stat.id === grainId); // Finding statistics by id field
        if (!statistics) {
          throw new Error('Statystyk nie znaleziono');
        }
        setGrainStatistics(statistics);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGrainStatistics();

  }, [grainId]);

  return { grainStatistics };
};

export default useGrainStatistics;
