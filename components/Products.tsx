import {ProductItem} from "@/components";
const Products = async ({slug}: any) => {
    const searchParams = await slug.searchParams;
    //xu li query inStock
    const inStockNum = searchParams?.inStock === "true" ? 1 : 0;
    const outOfStockNum = searchParams?.outOfStock === "true" ? 1 : 0;
    let stockMode = "lte";
    if (outOfStockNum === 1 && inStockNum === 1) {
        stockMode = "lte";
    } else if (inStockNum === 1) {
        stockMode = "equals";
    } else if (outOfStockNum === 1) {
        stockMode = "lt";
    } else {
        stockMode = "gt";
    }
    //them query
    const query = new URLSearchParams();
    query.append("filters[price][$lte]", String(searchParams?.price || 3000));
    query.append("filters[rating][$gte]", String(searchParams?.rating || 0));
    query.append(`filters[inStock][$${stockMode}]`,"1");
    if (searchParams?.category) {
        query.append("filters[category][$equals]",searchParams.category);
    }
    query.append("sort", searchParams?.sort || "defaultSort");
    query.append(`page`, String(searchParams?.page || 1));

    const data = await fetch(`http://localhost:3001/api/products?${query.toString()}`,{
        cache: "no-store"
    });
    const products = await data.json();
    
    return(
        <div className="p-2 grid grid-cols-4 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
            {products.length > 0 ? products.map((product: Product) => (
                <ProductItem key={product.id} product={product}/>
                )) : <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">No products found for specified query</h3>
            }
        </div>
    )
}
export default Products