"use client"
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityInput = () => {
    const [quantityCount, setQuantityCount] = useState<number>(1);
    const handleChangeQuantity = (actionName: string) => {
        if(actionName === "plus"){
            setQuantityCount(quantityCount+1);
        }else if(actionName === "minus" && quantityCount > 1){
            setQuantityCount(quantityCount-1);
        }
    }
    return (
        <>
            <div className="flex gap-x-4 items-center">
                <p className="text-xl">Quantity:</p>
                <div className="flex items-center gap-1">
                    <button onClick={() => handleChangeQuantity("minus")} className="cursor-pointer flex justify-center items-center border border-gray-300 text-gray-600 size-10 transition hover:opacity-75"><FaMinus /></button>
                    <input type="number" value={quantityCount} disabled={true} className="h-10 w-24 rounded border border-gray-300 sm:text-sm text-center"/>
                    <button onClick={() => handleChangeQuantity("plus")} className="cursor-pointer flex justify-center items-center border border-gray-300 text-gray-600 size-10 transition hover:opacity-75"><FaPlus /></button>
                </div>
            </div>
        </>
    )
}
export default QuantityInput;