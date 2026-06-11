"use client"
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface QuantityInputProps {
    quantityCount:number;
    setQuantityCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInput = ({quantityCount,setQuantityCount}: QuantityInputProps) => {
    const handleChangeQuantity = (actionName: string) => {
        if(actionName === "plus"){
            setQuantityCount(prev => prev+1);
        }else{
            setQuantityCount(prev => Math.max(1,prev-1));
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