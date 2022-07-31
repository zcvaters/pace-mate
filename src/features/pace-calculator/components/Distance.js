import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import "../styles/Distance.css";

export default function Distance(props) {
  const [distance, setDistance] = useState(null);

  const { onDistanceChange } = props;

  useEffect(() => {
    const newDistance = {
      distance,
    };
    onDistanceChange(newDistance);
  }, [distance, onDistanceChange]);

  return (
    <div className="distance-input-container">
      <div className="distance-controllers">
        <span className="p-float-label p-">
          <InputNumber
            className="distance-input"
            value={distance}
            buttonLayout="vertical"
            onValueChange={(e) => setDistance(e.value)}
            mode="decimal"
            suffix=" km"
            min={0}
            max={100000000}
            showButtons
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
          <label htmlFor="inputnumber">Distance</label>
        </span>
      </div>
    </div>
  );
}
