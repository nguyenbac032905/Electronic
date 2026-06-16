import {AdminNavbar, AdminSidebar, MainContent} from "@/app/admin/_components";

const NavbarSidebar = ({children, isFooter=true}: AdminMainContentProps) => {
    return (
        <div className="flex items-start pt-16 gap-x-10">
            <AdminSidebar />
            <MainContent isFooter={isFooter}>
                {children}
            </MainContent>
        </div>
    )
}
export default NavbarSidebar;  