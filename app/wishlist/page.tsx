import { SectionTitle, WishItem } from "@/components";

const WishlistPage = () => {
    return (
        <>
            <SectionTitle title="Wishlist" path="Home | Wishlist"/>
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
                            <WishItem />
                            <WishItem />
                            <WishItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default WishlistPage;