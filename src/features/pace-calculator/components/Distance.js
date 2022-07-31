import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";
import '../styles/Distance.css';


export default function Distance(props) {
    const [distance, setDistance] = useState(0);

    const { onDistanceChange } = props;

    useEffect(
        () => {
            const newDistance = {
                distance,
            }
            onDistanceChange(newDistance);
        }
        , [distance, onDistanceChange]
    )

    return (
        <div className="distance-input-container">
            <div className="distance-tag">Distance</div>
            <div className="distance-controllers">
            <InputNumber className="distance-input" value={distance} onValueChange={(e) => setDistance(e.value)}  mode="decimal" suffix=" km" min={0} max={100000000} showButtons/>
            </div>
        </div>
    );
}