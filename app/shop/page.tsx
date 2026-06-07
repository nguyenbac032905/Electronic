import { BreadCrumb, Filters, Pagination, Products } from "@/components";

const ShopPage = () => {
    return (
        <div className="w-full mx-auto px-10 max-sm:px-5">
            <BreadCrumb />
            <div className="grid grid-cols-[200px_1fr] gap-x-2 max-md:grid-cols-1 max-md:gap-y-5">
                <Filters />
                <div>
                    <h2 className="text-2xl font-bold max-sm:text-xl max-[400px]:text-lg">Samsung smart phones</h2>
                    <div className="divider"></div>
                    <Products />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default ShopPage;