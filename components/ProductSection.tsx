import {ProductItem} from "@/components";
const ProductSection = async () => {
    const data = await fetch("http://localhost:3000/api/products",{
        next: {revalidate: 10}
    });
    const products = await data.json();
    return (
        <div>
            <h2 className="text-3xl text-center py-5">Featured Products</h2>
            {products.length>0 && (
                <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto gap-x-2 gap-y-5 px-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
                    {products.map((product: Product) => (
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            )}
        </div>
    )
}
export default ProductSection;