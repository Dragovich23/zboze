import React from 'react';
import Navbar from './navbar';
import Banner from '../banner';
import GrainStatisticsComponent from '../statystyki/GrainStatistics';
import GrainInfo from './GrainInfo';
import './style.css';
export default function App() {
    return (
        <>
            <Navbar />
            <div class="sponsor"> 
            <img src="https://alphaglobal.store/cdn/shop/collections/FCB_-_BANNER.jpg?v=1697533404&width=2048" class="sponsor"/>
            <figcaption>Strona sponsorowana przez dominatora realu madryt</figcaption>

            </div>
                
            <div>
                <div className="grain">
                <GrainStatisticsComponent grainId="1"/>
                <GrainInfo name="Pszenica" uses="Produkcja wypieków, cukrownictwo, produkcja kaszy mannej" energy="328" protein="11,1"/>
            
                </div>
                <div className="grain">
                <GrainStatisticsComponent grainId="2"/>
                <GrainInfo name="Pszenżyto" uses="Przede wszystkim produkcja paszy, produkcja słodu, produkcja bioetanolu" energy="336 " protein="13"/>
            
                    </div>
                    <div className="grain">
                    <GrainStatisticsComponent grainId="3"/>
                    <GrainInfo name="Żyto" uses="Produkcja wypieków na zakwasie, pumpernikla, produkcja paszy, produkcja makaronu" energy="338" protein="10,3"/>
            
                </div>
                <div className="grain">
                <GrainStatisticsComponent grainId="4"/>
                <GrainInfo name="Kukurydza" uses="Produkcja skrobi, produkcja oleju, cukrownictwo, spożycie bezpośrednie" energy="116" protein="3,7"/>
            
                </div>
            <div className="grain">
            <GrainStatisticsComponent grainId="5"/>
            <GrainInfo name="Owies" uses="Przede wszystkim produkcja kasz i płatków, produkcja paszy, produkcja wypieków bezglutenowych" energy="389" protein="16,8"/>
            
                </div>
                <div className="grain">
                <GrainStatisticsComponent grainId="6"/>
                <GrainInfo name="Jęczmień" uses="Produkcja wypieków, produkcja kaszy, produkcja słodu piwowarskiego, produkcja paszy" energy="354" protein="12"/>
            
                </div>
            
            
            
            
            </div>
            <Banner/>
        </>
    );
}
