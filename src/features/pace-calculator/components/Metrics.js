export default function Metrics(props) {
  const { pace, distance, time, mode } = props;
  return (
    <div>
      {mode === "Pace" && (
        <p>
          Pace:  {pace !== 0 ? `${pace.minute} '${pace.second}` : "0' 0\""}
        </p>
      )}
      {mode === "Distance" && <p>Distance: {distance !== 0 ? `${distance}` : "0"}</p>}
      {mode === "Time" && (
        <p>
          Time: {time !== 0 ? `${time.timeHours}:${time.timeMinutes}:${time.timeSeconds}` : "hh:mm:ss"}
        </p>
      )}
    </div>
  );
}
