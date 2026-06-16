import {NavbarSidebar, NewProductsThisWeek, SaleThisWeek, UserSignupsThisWeek, VisitorsThisWeek} from "@/app/admin/_components";

export default function DashboardPage() {
    return (
        <NavbarSidebar isFooter={true}>
            <div className="px-4 py-6">
                <SaleThisWeek />
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-4">
                    <NewProductsThisWeek />
                    <VisitorsThisWeek />
                    <UserSignupsThisWeek />
                </div>
            </div>
        </NavbarSidebar>
    )
}