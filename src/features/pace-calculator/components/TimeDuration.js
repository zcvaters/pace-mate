import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import "../styles/TimeDuration.css";

export default function TimeDuration(props) {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  const { onTimeChange } = props;

  useEffect(() => {
    const newTime = {
      hour: hour ?? 0,
      minute: minute ?? 0,
      second: second ?? 0,
      totalTimeSeconds: hour * 60 * 60 + minute * 60 + second,
      totalTimeMinutes: hour * 60 + minute + second / 60,
    };
    onTimeChange(newTime);
  }, [hour, minute, onTimeChange, second]);

  return (
    <div className="time-input-container">
      <div className="time-controllers">
        <span className="p-float-label">
          <InputNumber
            className="time-inputs"
            onValueChange={(e) => setHour(e.value)}
            mode="decimal"
            value={hour}
            showButtons
            buttonLayout="vertical"
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            min={0}
            max={12}
          />
          <label htmlFor="inputnumber">Hours</label>
        </span>
        <div className="time-colon no-select">:</div>
        <span className="p-float-label">
          <InputNumber
            onValueChange={(e) => setMinute(e.value)}
            mode="decimal"
            value={minute}
            showButtons
            buttonLayout="vertical"
            className="time-inputs"
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            min={0}
            max={59}
          />
          <label htmlFor="inputnumber">Minutes</label>
        </span>
        <div className="time-colon no-select">:</div>
        <span className="p-float-label">
          <InputNumber
            onValueChange={(e) => setSecond(e.value)}
            mode="decimal"
            value={second}
            showButtons
            buttonLayout="vertical"
            className="time-inputs"
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            min={0}
            max={59}
          />
          <label htmlFor="inputnumber">Seconds</label>
        </span>
      </div>
    </div>
  );
}
