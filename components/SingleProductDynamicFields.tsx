"use client"
import {AddToCartSingleProductBtn,BuyNowSingleProductBtn,ColorInput,QuantityInput} from "@/components";
import { useState } from "react";
const SingleProductDynamicFields = ({product}: {product: Product}) => {
    const [quantityCount, setQuantityCount] = useState<number>(1);
    console.log("quantity" + quantityCount)
    return (
        <>
            <ColorInput />
            <QuantityInput quantityCount={quantityCount}  setQuantityCount={setQuantityCount}/>
            <div className="flex gap-x-5 max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-y-1">
                <AddToCartSingleProductBtn quantityCount={quantityCount} product={product}/>
                <BuyNowSingleProductBtn />
            </div>
        </>
    )
}

export default SingleProductDynamicFields;