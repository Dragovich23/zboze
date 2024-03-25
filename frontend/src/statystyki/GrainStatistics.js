import React, { Component } from 'react';
import useGrainStatistics from './GrainHook';

class GrainStatisticsComponent extends Component {
  render() {
    const { grainId } = this.props;
    const { grainStatistics } = useGrainStatistics(grainId);

    return (
      <div>
        <h1>Statystyki {grainStatistics?.name}</h1>
        <ul>
          <li>Średnia cena: {grainStatistics?.price}</li>
          <li>Średnie zbiory z hektara: {grainStatistics?.yield}</li>
          <li>Najlepsze Regiony Produkcji: {grainStatistics?.production}:</li>
        </ul>
      </div>
    );
  }
}

export default GrainStatisticsComponent;
