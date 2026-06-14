import { BreadCrumb, Filters, Pagination, Products } from "@/components";

const ShopPage = (slug: any) => {
    return (
        <div className="w-full mx-auto px-10 max-sm:px-5">
            <BreadCrumb />
            <div className="grid grid-cols-[200px_1fr] gap-x-2 max-md:grid-cols-1 max-md:gap-y-5">
                <Filters />
                <div>
                    <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-y-5 mb-5">
                        <h2 className="text-2xl font-bold max-sm:text-xl max-[400px]:text-lg">Samsung smart phones</h2>
                        <div className="flex items-center gap-x-5 max-lg:flex-col max-lg:w-full max-lg:items-start">
                            <h3 className="text-xl">Sort by:</h3>
                            <select
                                defaultValue="defaultSort"
                                className="select border-gray-400 py-2 px-2 border-2 select-bordered w-40 outline-none max-lg:w-full"
                                name="sort"
                            >
                                <option value="defaultSort">Default</option>
                                <option value="newestSort">Newest</option>
                                <option value="oldestSort">Oldest</option>
                                <option value="lowestPriceSort">Lowest Price</option>
                                <option value="highPriceSort">Highest Price</option>
                            </select>
                        </div>
                    </div>
                    <Products slug={slug}/>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default ShopPage;