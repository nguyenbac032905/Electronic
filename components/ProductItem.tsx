import Image from "next/image";
import Link from "next/link";
import {CustomButton} from "@/components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductItem = () => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Link href={"/product/1"}>
                <Image src="/product1.webp" width={300} height={300} alt="product 1" />
            </Link>
            <Link href={"/product/1"}>
                <h2 className="text-lg">Smart Phone</h2>
            </Link>
            <p>$22.00</p>
            <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
            <CustomButton paddingX={0} paddingY={5} customWidth="full" textSize="sm" buttonType="button" text="Add to cart"/>
        </div>
    )
}
export default ProductItem;