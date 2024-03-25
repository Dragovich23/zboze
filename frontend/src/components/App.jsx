import React from 'react';
import Navbar from './Navbar';
import Banner from '../banner';
import GrainStatisticsComponent from '../statystyki/GrainStatistics';
import GrainInfo from './component';
import TitleChanger from './tabNameSwap';
export default function App() {
    return (
        <>
            <TitleChanger/>
            <Navbar />
            <div>
                <h1>Jezu, dajcie mi je. Chcę je w buzi chcę je poczuć. Wielkie nabrzmiałe pszenżyto</h1>
                <p>Jak kupisz mi traktor to zrobię ci chleb.</p>
            </div>
            <div>
            <GrainInfo name="Pszenica" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="1"/>
            <GrainInfo name="Pszenżyto" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="2"/>
            <GrainInfo name="Żyto" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="3"/>
            <GrainInfo name="Kukurydza" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="4"/>
            <GrainInfo name="Owies" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="5"/>
            <GrainInfo name="Jęczmień" type="Zboże" origin="Podlasie" nutritionalValue="300kcal"/>
            <GrainStatisticsComponent grainId="6"/>
            </div>
            <Banner/>
        </>
    );
}
