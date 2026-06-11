"use client"
import { useProductStore } from "@/app/_zustand/store";

const AddToCartSingleProductBtn = ({product}: {product: Product}) => {
    const {addToCart} = useProductStore();
    const handleAddToCart = () => {
        addToCart({
            id: product?.id,
            title: product?.title,
            price: product?.price,
            image: product?.mainImage,
            amount: 1
        })
    }
    return (
        <button onClick={handleAddToCart} className="btn w-[200px] border border-black border-2 font-normal bg-white hover:bg-black hover:text-white transition-colors rounded-md uppercase ease-in">
            Add to cart
        </button>
    )
};
export default AddToCartSingleProductBtn;