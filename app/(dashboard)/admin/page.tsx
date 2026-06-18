import { LatestCustomers, NavbarSidebar, NewProductsThisWeek, SaleThisWeek, SessionByCountry, UserSignupsThisWeek, VisitorsThisWeek} from "@/app/(dashboard)/admin/_components";

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
                <div className="grid xl:grid-cols-3 xl: gap-4 grid-cols-1 mt-4">
                    <div className="col-span-2">
                        <SessionByCountry />
                    </div>
                    <div className="col-span-1">
                        <LatestCustomers />
                    </div>
                </div>
            </div>
        </NavbarSidebar>
    )
}