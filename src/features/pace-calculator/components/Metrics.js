

export default function Metrics(props) {
    const {pace, distance, time} = props;
    console.log(pace, distance, time);
  return (
    <div>
        <p>Pace: {pace.minute}'{pace.second}"</p>
        <p>Distance: {distance}</p>
        <p>Time: {time.timeHours}:{time.timeMinutes}:{time.timeSeconds}</p>
    </div>
  );
}