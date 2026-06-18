import {AdminNavbar, AdminSidebar, MainContent} from "@/app/(dashboard)/admin/_components";

const NavbarSidebar = ({children, isFooter=true}: AdminMainContentProps) => {
    return (
        <div className="flex items-start gap-x-10 bg-gray-50">
            <AdminSidebar />
            <MainContent isFooter={isFooter}>
                {children}
            </MainContent>
        </div>
    )
}
export default NavbarSidebar;  