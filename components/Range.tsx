interface RangeProps {
    min: number;
    max: number;
    step: string;
    itemKey: string;
    text?: string;
    marks?: number[];
    inputCategory: any;
    setInputCategory: any;
}

const Range = ({
    min,
    max,
    step,
    text,
    marks,
    itemKey,
    inputCategory,
    setInputCategory,
}: RangeProps) => {
    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={inputCategory[itemKey].value}
                className="range range-warning"
                onChange={(e) =>
                    setInputCategory((prev: any) => ({
                        ...prev,
                        [itemKey]: {
                            ...prev[itemKey],
                            value: Number(e.target.value),
                        },
                    }))
                }
            />

            {text && (
                <span>
                    {text} {inputCategory[itemKey].value}
                </span>
            )}

            {marks && (
                <div className="w-full flex justify-between text-xs px-2">
                    {marks.map((mark) => (
                        <span key={mark}>{mark}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Range;