import Image from "next/image";
import Link from "next/link";
import {CustomButton, ProductItemRating} from "@/components";
const ProductItem = ({product}: {product: Product}) => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Link href={`/product/${product.slug}`}>
                <Image src={`/${product.mainImage}` || "/product_placeholder.jpg"} width={300} height={350} className="h-[350px] w-[300px]" alt="product 1" />
            </Link>
            <Link href={`/product/${product.slug}`}>
                <h2 className="text-lg">{product.title}</h2>
            </Link>
            <p>{product.price}</p>
            <ProductItemRating productRating={product.rating} />
            <CustomButton paddingX={0} paddingY={5} customWidth="full" textSize="sm" buttonType="button" text="Add to cart"/>
        </div>
    )
}
export default ProductItem;