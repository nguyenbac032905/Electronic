"use client"
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

const HearElement = () => {
    const {wishlist} = useWishlistStore();
    return (
        <Link href={"/wishlist"} className="relative">
            <FaHeart className="text-2xl"/>
            <span className="block w-5 h-5 bg-custom-yellow rounded-full flex justify-center items-center absolute top-[-10px] right-[-20px]">{wishlist.length}</span>
        </Link>
    )
}
export default HearElement;