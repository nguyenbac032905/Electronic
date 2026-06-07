import { BreadCrumb, Filters } from "@/components";

const ShopPage = () => {
    return (
        <div className="w-full mx-auto px-10">
            <BreadCrumb />
            <div className="grid grid-cols-[200px_1fr] gap-x-2">
                <Filters />
                <div>
                    <h2 className="text-2xl font-bold">Samsung smart phones</h2>
                    <div className="divider"></div>
                </div>
            </div>
        </div>
    )
}
export default ShopPage;