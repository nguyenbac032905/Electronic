"use client"
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";

interface AddToCartSingleProductBtnProps{
    product: Product;
    quantityCount: number;
}

const AddToCartSingleProductBtn = ({product,quantityCount}: AddToCartSingleProductBtnProps) => {
    const {addToCart,calculateTotals} = useProductStore();
    const handleAddToCart = () => {
        addToCart({
            id: product?.id,
            title: product?.title,
            price: product?.price,
            image: product?.mainImage,
            amount: quantityCount
        });
        calculateTotals();
        toast.success("Product added to the cart!");
    }
    return (
        <button onClick={handleAddToCart} className="btn w-[200px] border border-black border-2 font-normal bg-white hover:bg-black hover:text-white transition-colors rounded-md uppercase ease-in">
            Add to cart
        </button>
    )
};
export default AddToCartSingleProductBtn;