import React from 'react';
import Navbar from './Navbar';
import Banner from '../banner';
import GrainStatisticsComponent from '../statystyki/GrainStatistics';
import GrainInfo from '../komponentstanowy/component';
export default function App() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Jezu, dajcie mi je. Chcę je w buzi chcę je poczuć. Wielkie nabrzmiałe pszenżyto</h1>
                <p>Jak kupisz mi traktor to zrobię ci chleb.</p>
            </div>
            <div>
            <GrainInfo name="Pszenica" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainName="Pszenica" grainId="1"/>
            <GrainStatisticsComponent grainName="Żyto" grainId="2"/>
            <GrainStatisticsComponent grainName="Pszenżyto" grainId="3"/>
            </div>
            <Banner/>
        </div>
    );
}
