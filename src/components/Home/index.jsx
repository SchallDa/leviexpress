import React, { useState } from "react";
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from "../JourneyDetail";
// import { useState } from 'react';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <div className="container">
          Nalezeno spojení s id 
          <JourneyDetail journey={journey}/>
          {/* {journey.journeyId} */}
        </div>
      )}
    </main>
  );
};
