import React from "react";
import SelectGroup from "./SelectGroup";
import TextInput from "./TextInput"
import Banner from "./banner/index"
import GrainStatisticsComponent from "./statystyki/GrainStatistics"
export default function App(){
    return(
    <form action="">
        <Title text="Rejestracja produktu"/>
        <SelectGroup/>
        <GrainStatisticsComponent grainName="Pszenicy" grainId="1"/>
        <TextInput hint="Nazwisko"/>
        <Banner/>
    </form>
    )
}