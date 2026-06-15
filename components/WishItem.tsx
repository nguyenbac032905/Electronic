import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaHeartCrack } from "react-icons/fa6";

const WishItem = ({item}:{item:ProductInWishlist}) => {
    const {removeFromWishlist} = useWishlistStore();
    const handleRemoveFromWishlist = () => {
        removeFromWishlist(item.id);
        toast.success("Product removed to wishlist");
    }
    return (
        <tr>
            <td className="text-center text-sm">1</td>
            <td className="w-12 h-12 mx-auto">
                <Image src={`/${item.image}`} width={200} height={200} className='w-auto h-auto' alt="product image" />
            </td>
            <td className="text-center text-sm">{item.title}</td>
            <td className="text-center text-sm">In Stock</td>
            <td className="text-center text-sm">
                <button onClick={handleRemoveFromWishlist} className="btn btn-xs bg-custom-yellow border border-black hover:bg-black hover:text-custom-yellow text-sm">
                    <FaHeartCrack />
                    <span className="max-sm:hidden">remove from the wishlist</span>
                </button>
            </td>
        </tr>
    )
}
export default WishItem;