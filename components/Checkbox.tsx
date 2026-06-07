
const Checkbox = ({text} : {text: string}) => {
    return (
        <div className="form-control">
            <label className="cursor-pointer flex items-center">
                <input type="checkbox" defaultChecked className="checkbox checkbox-warning"/>
                <span className="ml-2 text-lg">{text}</span>
            </label>
        </div>
    )
}
export default Checkbox;