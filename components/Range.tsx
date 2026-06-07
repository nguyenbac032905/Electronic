"use client"
import { useState } from "react";

interface RangeProps {
    min: number,
    max: number,
    defaultValue: number
}

const Range = ({min,max,defaultValue}: RangeProps) => {
    const [rangeCurrentValue, setRangeCurrentValue] = useState<number>(defaultValue);
    const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeCurrentValue(parseInt(e.target.value));
    }
    return (
        <div>
            <input type="range" min={min} max={max} value={rangeCurrentValue} onChange={(e) => handleRange(e) } className="range range-warning" />
            <span>{`Max price: $${rangeCurrentValue}`}</span>
        </div>
    )
}
export default Range;