import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TimeDuration from "./features/pace-calculator/components/TimeDuration";
import Distance from "./features/pace-calculator/components/Distance";
import Pace from "./features/pace-calculator/components/Pace";
import Metrics from "./features/pace-calculator/components/Metrics";
import ModeContext from "./features/pace-calculator/components/Mode";
import { Icon } from "@iconify/react";
import { useEffect, useState, useCallback } from "react";
import {
  distanceAndTimeToPace,
  paceAndDistanceToTime,
  timeAndPaceToDistance,
} from "./features/pace-calculator/converters/time";
import { TabMenu } from "primereact/tabmenu";

function App() {
  const [time, setTime] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [pace, setPace] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [predictedTime, setPredictedTime] = useState(0);
  const [predictedDistance, setPredictedDistance] = useState(0);
  const [predictedPace, setPredictedPace] = useState(0);
  const [paceMode, setPaceMode] = useState(true);
  const [distanceMode, setDistanceMode] = useState(false);
  const [timeMode, setTimeMode] = useState(false);
  const [mode, setMode] = useState("Pace");

  const recalculateMetrics = useCallback(() => {
    if (paceMode) {
      const newPace = distanceAndTimeToPace(
        totalDistance,
        time.totalTimeMinutes
      );
      if (newPace) {
        setPredictedPace({
          minute: newPace.paceMinutes,
          second: newPace.paceSeconds,
        });
      }
    } else if (distanceMode) {
      const newDistance = timeAndPaceToDistance(
        time.totalTimeSeconds,
        pace.totalPaceSeconds
      );
      if (newDistance) {
        setPredictedDistance(newDistance);
      }
    } else if (timeMode) {
      const newTime = paceAndDistanceToTime(
        pace.totalPaceSeconds,
        totalDistance
      );
      if (newTime) {
        setPredictedTime({
          timeHours: newTime.timeHours,
          timeMinutes: newTime.timeMinutes,
          timeSeconds: newTime.timeSeconds,
        });
      }
    }
  }, [
    distanceMode,
    pace.totalPaceSeconds,
    paceMode,
    time.totalTimeMinutes,
    time.totalTimeSeconds,
    timeMode,
    totalDistance,
  ]);
  useEffect(() => {
    recalculateMetrics();
  }, [time, pace, totalDistance, recalculateMetrics]);

  const items = [{ label: "Pace" }, { label: "Distance" }, { label: "Time" }];

  const onTabChange = (event) => {
    setActiveIndex(event.index);
    if (event.value.label === "Pace") {
      setPaceMode(true);
      setDistanceMode(false);
      setTimeMode(false);
    } else if (event.value.label === "Distance") {
      setPaceMode(false);
      setDistanceMode(true);
      setTimeMode(false);
    } else if (event.value.label === "Time") {
      setPaceMode(false);
      setDistanceMode(false);
      setTimeMode(true);
    }
    setMode(event.value.label);
  };
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
            <h1 className="form-title no-select">Pace Mate</h1>
          </div>
          <ModeContext.Provider
            value={mode}
          >
          <TabMenu
            model={items}
            className={"tab-menu"}
            activeIndex={activeIndex}
            onTabChange={onTabChange}
          />
          {(timeMode || paceMode) && (
            <Distance
              distance={totalDistance}
              onDistanceChange={setTotalDistance}
            />
          )}
          {(distanceMode || paceMode) && (
            <TimeDuration time={time} onTimeChange={setTime} />
          )}
          {(distanceMode || timeMode) && (
            <Pace pace={pace} onPaceChange={setPace} />
          )}
          <Metrics
            pace={predictedPace}
            distance={predictedDistance}
            time={predictedTime}
            mode={mode}
          />
          </ModeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
