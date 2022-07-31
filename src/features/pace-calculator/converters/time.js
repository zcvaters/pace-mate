export function distanceAndTimeToPace(distance, time) {
  if (time === 0 || distance === 0) {
    return;
  }
  const pace = time / distance;
  const paceMinutes = Math.floor(pace);
  const paceSeconds = Math.round((pace - paceMinutes) * 60);
  return { paceMinutes, paceSeconds };
}

export function timeAndPaceToDistance(time, pace) {
  if (pace === 0 || time === 0) {
    return;
  }
  const distance = (time / pace).toFixed(2);
  return distance;
}

export function paceAndDistanceToTime(pace, distance) {
  if (pace === 0 || distance === 0) {
    return;
  }
  const time = distance * pace;
  const timeHours = Math.floor(time / 3600);
  const timeMinutes = Math.floor((time - timeHours * 3600) / 60);
  const timeSeconds = Math.round(time - timeHours * 3600 - timeMinutes * 60);
  return { timeHours, timeMinutes, timeSeconds };
}
