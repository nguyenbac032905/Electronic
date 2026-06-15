"use client"
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaHeartCrack } from "react-icons/fa6";

const AddToWishlistBtn = ({product}:{product: Product}) => {
    const {wishlist,addToWishlist,removeFromWishlist} = useWishlistStore();
    const [isInWishlist, setIsInWishlist] = useState<boolean>(
        wishlist.some(item => item.id === product.id)
    );

    const handleAddToWishlist = () => {
        addToWishlist({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.mainImage,
            slug: product.slug,
        })
        setIsInWishlist(true);
        toast.success("Product added to wishlist");
    };
    const handleRemoveFromWishlist = () => {
        removeFromWishlist(product.id);
        setIsInWishlist(false);
        toast.success("Product removed to wishlist");
    }
    return (
        <>
            {isInWishlist ? (
                <button className="btn btn-sm bg-custom-yellow border border-black cursor-pointer" onClick={handleRemoveFromWishlist}>
                    <FaHeartCrack className="text-xl"/>
                    <span className="text-sm">REMOVE FROM WISHLIST</span>
                </button>
            ) : (
                <button className="btn btn-sm bg-custom-yellow border border-black cursor-pointer" onClick={handleAddToWishlist}>
                    <FaHeart className="text-xl"/>
                    <span className="text-sm">ADD TO WISHLIST</span>
                </button>
            )}
        </>
    )
}
export default AddToWishlistBtn;