import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import "../styles/Pace.css";

export default function Pace(props) {
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  const { onPaceChange } = props;

  useEffect(() => {
    const minutes = minute ?? 0;
    const seconds = second ?? 0;
    const newPace = {
      minute: minutes ?? 0,
      second: seconds ?? 0,
      totalPaceSeconds: minutes * 60 + seconds,
      totalTimeMinutes: minutes + seconds / 60,
    };
    onPaceChange(newPace);
  }, [minute, second, onPaceChange]);

  return (
    <div className="pace-input-container">
      <div className="pace-controllers">
        <span className="p-float-label">
          <InputNumber
            className="pace-inputs"
            value={minute}
            onValueChange={(e) => setMinute(e.value)}
            suffix=" '"
            mode="decimal"
            min={0}
            max={59}
            showButtons
            buttonLayout="vertical"
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
          <label htmlFor="inputnumber">Minutes </label>
        </span>
        <span className="p-float-label">
          <InputNumber
            className="pace-inputs"
            value={second}
            onValueChange={(e) => setSecond(e.value)}
            suffix=' "'
            mode="decimal"
            min={0}
            max={59}
            showButtons
            buttonLayout="vertical"
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
          <label htmlFor="inputnumber">Seconds</label>
        </span>
      </div>
    </div>
  );
}
