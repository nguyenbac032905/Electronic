import { ProductItem, SectionTitle } from "@/components";

interface Props {
    searchParams: Promise<{ search: string }>
}
const SearchPage = async ({ searchParams }: Props) => {
    const { search } = await searchParams;
    console.log(search)
    const data = await fetch(`http://localhost:3001/api/products?search=${search || ""}`, {
        cache: "no-store"
    });

    const products = await data.json();

    return (
        <div>
            <SectionTitle title="Search Page" path="Home | Search" />
            <div className="max-w-screen-2xl mx-auto">
                {search && (
                    <h3 className="text-4xl text-center py-10 max-sm:text-3xl">
                        Showing results for {search}
                    </h3>
                )}
                <div className="grid grid-cols-4 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
                    {products.length > 0 ? (
                        products.map((product: Product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    ) : (
                        <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
                            No products found for specified query
                        </h3>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SearchPage;