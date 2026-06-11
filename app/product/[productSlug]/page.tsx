import {
    AddToCartSingleProductBtn,
  BuyNowSingleProductBtn,
  ColorInput,
  ProductTabs,
  QuantityInput,
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

const SingleProductPage = async ({params}: SingleProductPageProps) => {
    const {productSlug} = await params;
    const res = await fetch(`http://localhost:3000/api/products/${productSlug}`);
    const product = await res.json();
    if(!product || product.error){
        notFound();
    }
    return (
        <>
            <div className="mx-auto flex max-w-screen-2xl justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
                <div>
                    <Image
                        src={`/${product.mainImage}`}
                        width={500}
                        height={500}
                        alt="main image"
                    />
                    <div className="flex justify-around mt-5 flext-wrap max-[500px]:justify-center max-[500px]:gap-x-1">
                        <Image
                        src={"/laptop 1.webp"}
                        width={100}
                        height={100}
                        alt="main image"
                        />
                        <Image
                        src={"/laptop 2.webp"}
                        width={100}
                        height={100}
                        alt="laptop image"
                        />
                        <Image
                        src={"/laptop 3.webp"}
                        width={100}
                        height={100}
                        alt="laptop image"
                        />
                        <Image
                        src={"/laptop 4.webp"}
                        width={100}
                        height={100}
                        alt="laptop image"
                        />
                    </div>
                    </div>
                    <div className="flex flex-col gap-y-7">
                    <SingleProductRate reviews={2} />
                    <h1 className="text-3xl">{product.title}</h1>
                    <p className="text-xl font-semibold">${product.price}</p>
                    <UrgencyText stock={90} />
                    <StockAvailabillity stock={90} />
                    <ColorInput />
                    <QuantityInput />
                    <div className="flex gap-x-5">
                        <AddToCartSingleProductBtn product={product}/>
                        <BuyNowSingleProductBtn />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="flex items-center gap-x-2">
                        <FaHeart />
                        <span className="text-lg">Wish-list</span>
                        </p>
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
