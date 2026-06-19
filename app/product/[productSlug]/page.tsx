import {
    AddToWishlistBtn,
  ProductTabs,
  SingleProductDynamicFields,
  SingleProductRate,
  StockAvailabillity,
  UrgencyText,
} from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaHeart,
  FaSquareFacebook,
  FaSquarePinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";

interface ImageItem {
    imageID: string;
    productID: string;
    image: string
}

const SingleProductPage = async ({params}: SingleProductPageProps) => {
    const {productSlug} = await params;

    const res = await fetch(`http://localhost:3001/api/products/${productSlug}`,{
        cache: "no-store"
    });
    const product = await res.json();
    if(!product || product.error){
        notFound();
    }

    const imagesData = await fetch(`http://localhost:3001/api/images/${product.id}`,{
        cache: "no-store"
    });
    const images = await imagesData.json();
    return (
        <>
            <div className="mx-auto flex max-w-screen-2xl justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
                <div>
                    <Image
                        src={`/${product?.mainImage}`}
                        width={500}
                        height={500}
                        alt="main image"
                    />
                    {images?.length>0 && (
                        <div className="flex justify-around mt-5 flext-wrap max-[500px]:justify-center max-[500px]:gap-x-1">
                            {images?.map((imageItem: ImageItem) => (
                                <Image
                                    key={imageItem?.imageID}
                                    src={`/${imageItem?.image}`}
                                    width={100}
                                    height={100}
                                    alt="laptop image"
                                />
                            ))}
                        </div>
                    )}
                    </div>
                    <div className="flex flex-col gap-y-7">
                    <SingleProductRate reviews={2} />
                    <h1 className="text-3xl">{product?.title}</h1>
                    <p className="text-xl font-semibold">${product?.price}</p>
                    {product?.inStock===1 && <UrgencyText stock={90} />}
                    <StockAvailabillity stock={90} inStock={product?.inStock}/>
                    <SingleProductDynamicFields product={product}/>
                    <div className="flex flex-col gap-y-2">
                        <AddToWishlistBtn product={product} />
                        <p className="text-lg">
                        SKU: <span className="ml-1">abcd-18</span>
                        </p>
                        <div className="flex gap-x-2 text-lg">
                            <span>Share:</span>
                            <div className="flex items-center gap-x-1 text-2xl">
                                <FaSquareFacebook />
                                <FaSquareXTwitter />
                                <FaSquarePinterest />
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <Image src={"/visa.svg"} width={50} height={50} alt="visa icon" />
                            <Image
                                src={"/mastercard.svg"}
                                width={50}
                                height={50}
                                alt="mastercard icon"
                            />
                            <Image src={"/ae.svg"} width={50} height={50} alt="ae icon" />
                            <Image
                                src={"/paypal.svg"}
                                width={50}
                                height={50}
                                alt="paypal icon"
                            />
                            <Image
                                src={"/dinersclub.svg"}
                                width={50}
                                height={50}
                                alt="dinersclub icon"
                            />
                            <Image
                                src={"/discover.svg"}
                                width={50}
                                height={50}
                                alt="discover icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <ProductTabs product={product}/>
            </div>
        </>
  );
};
export default SingleProductPage;
