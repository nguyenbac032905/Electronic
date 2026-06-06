import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductItem = () => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Image src="/product1.webp" width={300} height={300} alt="product 1" />
            <h2 className="text-lg">Smart Phone</h2>
            <p>$22.00</p>
            <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
            <button className="btn btn-custom-yellow w-full hover:bg-black hover:text-custom-yellow">Add to cart</button>
        </div>
    )
}
export default ProductItem;