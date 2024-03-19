import React, { Component } from 'react';
import useGrainStatistics from './GrainHook';

class GrainStatisticsComponent extends Component {
  render() {
    const { grainId, grainName } = this.props;
    const { grainStatistics } = useGrainStatistics(grainId);

    return (
      <div>
        <h1>Statystyki {grainName}</h1>
        <ul>
          <li>Całkowita Produkcja {grainName}: {grainStatistics?.totalProduction}</li>
          <li>Średnie Zbiory {grainName}: {grainStatistics?.averageYield}</li>
          <li>Najlepsze Regiony Produkcji {grainName}:</li>
          <ul>
            {grainStatistics?.topRegions.map((region, index) => (
              <li key={index}>{region}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default GrainStatisticsComponent;
