import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

export default function TimeDuration() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  return (
    <div>
      <InputNumber
        value={hour}
        onValueChange={(e) => setHour(e.value)}
        mode="decimal"
        showButtons
        buttonLayout="vertical"
        style={{ width: "3em" }}
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        min={0}
        max={12}
      />
      <InputNumber
        value={minute}
        onValueChange={(e) => setMinute(e.value)}
        mode="decimal"
        showButtons
        buttonLayout="vertical"
        style={{ width: "3em" }}
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        min={0}
        max={59}
      />
      <InputNumber
        value={second}
        onValueChange={(e) => setSecond(e.value)}
        mode="decimal"
        showButtons
        buttonLayout="vertical"
        style={{ width: "3em" }}
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        min={0}
        max={59}
      />
    </div>
  );
}
