import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TimeDuration from "./features/pace-calculator/components/TimeDuration";
import Distance from "./features/pace-calculator/components/Distance";
import Pace from "./features/pace-calculator/components/Pace";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);

  useEffect(() => {
    console.log(time);
    console.log(distance);
    console.log(pace);
  }, [time, pace, distance]);
  return (
    <div className="index">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <Icon
              icon="bx:run"
              style={{
                fontSize: "36px",
                alignSelf: "center",
              }}
            />
            <h1 className="form-title">Pace Mate</h1>
          </div>
          <Distance distance={distance} onDistanceChange={setDistance} />
          <TimeDuration time={time} onTimeChange={setTime} />
          <Pace pace={pace} onPaceChange={setPace} />
        </div>
      </div>
    </div>
  );
}

export default App;
