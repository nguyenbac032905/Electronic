
const Checkbox = ({text, stateValue, setStateValue, itemKey} : {text: string,stateValue: any, setStateValue: any, itemKey: string}) => {
    return (
        <div className="form-control">
            <label className="cursor-pointer flex items-center">
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-warning"
                    checked={stateValue[itemKey].isChecked}
                    onChange={() => setStateValue((prev:any) => ({
                        ...prev,
                        [itemKey]: {
                            ...prev[itemKey],
                            isChecked: !prev[itemKey].isChecked
                        }
                    }))}
                />
                <span className="ml-2 text-lg">{text}</span>
            </label>
        </div>
    )
}
export default Checkbox;