import { BreadCrumb, Filters, Pagination, Products, SortBy } from "@/components";

const improveCategoryText = (text: string) : string => {
    if(text.indexOf("-") !== -1){
        const textArray = text.split("-");

        return textArray.join(" ");
    }else{
        return text;
    }
}
const ShopPage = async (slug: any) => {
    const searchParams = await slug.searchParams;
    return (
        <div className="w-full mx-auto px-10 max-sm:px-5">
            <BreadCrumb />
            <div className="grid grid-cols-[200px_1fr] gap-x-2 max-md:grid-cols-1 max-md:gap-y-5">
                <Filters />
                <div>
                    <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-y-5 mb-5">
                        <h2 className="text-2xl font-bold max-sm:text-xl max-[400px]:text-lg uppercase">
                            {searchParams?.category? improveCategoryText(searchParams.category) : "All products"}
                        </h2>
                        <SortBy />
                    </div>
                    <Products slug={slug}/>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default ShopPage;