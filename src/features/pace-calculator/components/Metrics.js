import ModeContext from "./Mode";
import { useContext } from "react";

export default function Metrics(props) {
  const modeContext = useContext(ModeContext);
  const { pace, distance, time } = props;
  console.log(modeContext);
  return (
    <div>
      {modeContext.mode === "Pace" && (
        <p>
          Pace: {pace !== 0 ? `${pace.minute} '${pace.second}` : "0' 0\""}
          {modeContext.metric === true ? "/km" : "/mi"}
        </p>
      )}
      {modeContext.mode === "Distance" && (
        <p>
          Distance: {distance !== 0 ? `${distance}` : "0"}{" "}
          {modeContext.metric === true ? "km" : "mi"}
        </p>
      )}
      {modeContext.mode === "Time" && (
        <p>
          Time:{" "}
          {time !== 0
            ? `${time.timeHours}:${time.timeMinutes}:${time.timeSeconds}`
            : "hh:mm:ss"}
        </p>
      )}
    </div>
  );
}
