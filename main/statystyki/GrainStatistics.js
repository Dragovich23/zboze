import React from 'react';
import useGrainStatistics from './GrainHook'; 
//musi to być funkcja, żeby korzystać z hooka
//propsy
function GrainStatisticsComponent({ grainId }) {
  const { grainStatistics } = useGrainStatistics(grainId);

  return (
    <div id={grainId} className="graincomponent">
      <h1>Statystyki {grainStatistics?.name}</h1>
      <ul>
        <li>Średnia cena: {grainStatistics?.cena}</li>
        <li>Średnie zbiory z hektara: {grainStatistics?.yield}</li>
        <li>Najlepsze Regiony Produkcji: {grainStatistics?.production}</li>
      </ul>
    </div>
  );
}

export default GrainStatisticsComponent;