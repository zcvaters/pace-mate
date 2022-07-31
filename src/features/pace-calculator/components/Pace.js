import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import "../styles/Pace.css";


export default function Pace(props) {
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const { onPaceChange } = props;

    useEffect(
        () => {
            const newPace = {
                minute,
                second,
            }
            onPaceChange(newPace);
        }
        , [minute, second, onPaceChange]
    )

    return (
        <div className="pace-input-container">
            <div className="pace-tag">Pace</div>
            <div className="pace-controllers">
            <InputNumber className="pace-input" value={minute} onValueChange={(e) => setMinute(e.value)}  mode="decimal" min={0} max={59} showButtons buttonLayout="vertical"/>
            <InputNumber className="pace-input" value={second} onValueChange={(e) => setSecond(e.value)}  mode="decimal" min={0} max={59} showButtons buttonLayout="vertical"/>
            </div>
        </div>
    );
}
