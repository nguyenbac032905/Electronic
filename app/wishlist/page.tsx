"use client"
import { SectionTitle, WishItem } from "@/components";
import { useWishlistStore } from "../_zustand/wishlistStore";

const WishlistPage = () => {
    const {wishlist} = useWishlistStore();
    return (
        <>
            <SectionTitle title="Wishlist" path="Home | Wishlist"/>
            {wishlist.length > 0 ? (
                <div className="max-w-screen-2xl mx-auto w-full">
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="">Image</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map(item => (
                                    <WishItem item={item} key={item.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ): (
                <h3 className="text-center text-4xl py-10 text-black max-lg:text-3xl max-sm:text-2xl max-sm:pt-5 max-[400px]:text-xl">No items found in the wishlist</h3>
            )}
        </>
    )
}

export default WishlistPage;