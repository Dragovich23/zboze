import { useState, useEffect } from 'react';
//hook
const useGrainStatistics = (grainId) => {
  const [grainStatistics, setGrainStatistics] = useState(null);
//baza danych ;)
  useEffect(() => {
    const rawData = 
`1, pszenica konsumpcyjna, 860.00, pszenicy, 5.2 tony, Nizinia Śląska i Szczecińska
2, pszenżyto, 620.00, pszenżyta, 4.5 tony, Wielkopolska i Kujawy
3, żyto konsumpcyjne, 560.00, żyta, 3.5 tony, Polska Środkowa i Wschodnia
4, kukurydza, 620.00, kukurydzy, 11.5 tony, Wielkopolska i Kujawsko-Pomorskie
5, owies, 1000.00, owsa, 6.7 tony, Pojezierze Pomorskie i Mazurskie
6, jęczmień konsumpcyjny, 600.00, jęczmienia, 6 ton, w Polsce zachodniej i na Przedgórzu Sudeckim`;

    const lines = rawData.split('\n');

    const data = lines.map(line => {
      const [id, zboze, cena, name, yieldValue, production] = line.split(', ');
      return { id: id, zboze: zboze, cena: cena, name, yield: yieldValue, production: production };
    });

    const statistics = data.find(stat => stat.id === grainId);
    if (!statistics) {
      console.error('Statystyk nie znaleziono');
      return;
    }
    setGrainStatistics(statistics);
  }, [grainId]);

  return { grainStatistics };
};

export default useGrainStatistics;
