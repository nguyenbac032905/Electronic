import { FaCheck } from "react-icons/fa6";

const ColorInput = () => {
    return(
        <div className="flex flex-col gap-y-2">
            <p className="text-xl">Color: <span className="text-lg">silver</span></p>
            <div className="flex gap-x-1">
                <div className="bg-gray-400 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"><FaCheck /></div>
                <div className="bg-gray-600 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"></div>
                <div className="bg-blue-400 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"></div>
            </div>
        </div>
    )
}
export default ColorInput;