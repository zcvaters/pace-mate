import ModeContext from "./Mode";
import { useContext } from "react";

export default function Metrics(props) {
  const modeContext = useContext(ModeContext);
  const { pace, distance, time } = props;

  return (
    <div>
      {modeContext === "Pace" && (
        <p>Pace: {pace !== 0 ? `${pace.minute} '${pace.second}` : "0' 0\""}</p>
      )}
      {modeContext  === "Distance" && (
        <p>Distance: {distance !== 0 ? `${distance}` : "0"}</p>
      )}
      {modeContext  === "Time" && (
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
