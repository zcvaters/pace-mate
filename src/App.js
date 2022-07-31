import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TimeDuration from "./features/pace-calculator/components/TimeDuration";
import Distance from "./features/pace-calculator/components/Distance";
import Pace from "./features/pace-calculator/components/Pace";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);



  useEffect(
    () => {
      console.log(time);
    }
    , [time]
  )
  return (<div className="index">
    <div className="container">
    <div className="form-container">
      <Distance distance={distance} onDistanceChange={setDistance}/>
      <TimeDuration time={time} onTimeChange={setTime}/>
      <Pace pace={pace} onPaceChange={setPace}/>
      </div>
    </div>
  </div>
  );
}

export default App;
