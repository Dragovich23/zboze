import React from 'react';
import Navbar from './navbar';
import Banner from '../banner';
import GrainStatisticsComponent from '../statystyki/GrainStatistics';
import GrainInfo from './GrainInfo';
export default function App() {
    return (
        <>
            <Navbar />
            <div>
                <h1>Jezu, dajcie mi je. Chcę je w buzi chcę je poczuć. Wielkie nabrzmiałe pszenżyto</h1>
                <p>Jak kupisz mi traktor to zrobię ci chleb.</p>
            </div>
            <div>
            <GrainInfo name="Pszenica" uses="Produkcja wypieków, cukrownictwo, produkcja kaszy mannej" energy="328" protein="11,1"/>
            <GrainStatisticsComponent grainId="1"/>
            <GrainInfo name="Pszenżyto" uses="Przede wszystkim produkcja paszy, produkcja słodu, produkcja bioetanolu" energy="336 " protein="13"/>
            <GrainStatisticsComponent grainId="2"/>
            <GrainInfo name="Żyto" uses="Produkcja wypieków na zakwasie, pumpernikla, produkcja paszy, produkcja makaronu" energy="338" protein="10,3"/>
            <GrainStatisticsComponent grainId="3"/>
            <GrainInfo name="Kukurydza" uses="Produkcja skrobi, produkcja oleju, cukrownictwo, spożycie bezpośrednie" energy="116" protein="3,7"/>
            <GrainStatisticsComponent grainId="4"/>
            <GrainInfo name="Owies" uses="Przede wszystkim produkcja kasz i płatków, produkcja paszy, produkcja wypieków bezglutenowych" energy="389" protein="16,8"/>
            <GrainStatisticsComponent grainId="5"/>
            <GrainInfo name="Jęczmień" uses="Produkcja wypieków, produkcja kaszy, produkcja słodu piwowarskiego, produkcja paszy" energy="354" protein="12"/>
            <GrainStatisticsComponent grainId="6"/>
            </div>
            <Banner/>
        </>
    );
}
