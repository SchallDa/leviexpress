import React from "react";
import './style.css';
import { BusStop } from "../BusStop";

 export const JourneyDetail=({journey})=>{
    console.log(journey);
    return (
    <>
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
        <BusStop key={stop.code} time={stop.time} name={stop.name} station={stop.station}/>
        ))}
      </div>
    </div>
    </>
    )
 }