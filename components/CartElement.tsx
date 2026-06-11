"use client"
import { useProductStore } from "@/app/_zustand/store"
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"

const CartElement = () => {
    const {allQuantity} = useProductStore();
    return (
        <Link href={"/cart"} className="relative">
            <FaCartShopping className="text-2xl"/>
            <span className="block w-5 h-5 bg-custom-yellow rounded-full flex justify-center items-center absolute top-[-10px] right-[-20px]">{allQuantity}</span>
        </Link>
    )
}

export default CartElement;