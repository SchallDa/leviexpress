import React, { useState } from "react";
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from "../JourneyDetail";
import { SelectedSeat } from "../SelectedSeat";
import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const navigate=useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };
  const handleBuy=()=> {
console.log("Funguju")
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <div className="container">
          Nalezeno spojení s id 
          <JourneyDetail journey={journey}/>
          <SelectedSeat number={journey.autoSeat}/>
          {/* {journey.journeyId} */}
          <div className="controls container">
      <button className="btn btn--big" type="button" onClick={handleBuy()}>Rezervovat</button>
    </div>

        </div>
      )}
    </main>
  );
};
