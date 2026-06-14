import {ProductItem} from "@/components";
const Products = async ({slug}: any) => {
    const searchParams = await slug.searchParams;

    const inStockNum = searchParams?.inStock === "true" ? 1 : 0;
    const outOfStockNum = searchParams?.outOfStock === "true" ? 1 : 0;
    let stockMode = "gte";

    if (outOfStockNum === 1 && inStockNum === 1) {
        stockMode = "lte";
    } else if (inStockNum === 1) {
        stockMode = "equals";
    } else if (outOfStockNum === 1) {
        stockMode = "lt";
    } else {
        stockMode = "gt";
    }

    const data = await fetch(`http://localhost:3000/api/products?filters[price][$lte]=${searchParams?.price||3000}&filters[rating][$gte]=${searchParams?.rating||0}&sort=${searchParams?.sort}&filters[inStock][$${stockMode}]=1`,{
        cache: "no-store"
    });
    const products = await data.json();
    
    return(
        <>
            {products.length > 0 && (
                <div className="p-2 grid grid-cols-4 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
                    {products.map((product: Product) => (
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            )}
        </>
    )
}
export default Products