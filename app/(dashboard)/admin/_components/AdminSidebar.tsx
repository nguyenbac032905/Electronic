"use client"
import { Sidebar,SidebarItems,SidebarItemGroup, SidebarItem,SidebarCollapse } from "flowbite-react";
import { usePathname } from "next/navigation";
import { HiChartPie,HiShoppingBag, HiUsers,HiShoppingCart, HiOutlineViewGrid} from "react-icons/hi";
const AdminSidebar = () => {
    const pathName = usePathname();
    const isEcommerceOpen = pathName.includes("ecommerce");
    const isUsersOpen = pathName.includes("users");
    const isOrdersOpen = pathName.includes("orders");
    const isCategoriesOpen = pathName.includes("categories");
    return ( 
        <Sidebar className="w-64 shrink-0 pt-4 m-0">
            <div className="flex flex-col justify-between py-2 h-[100vh] px-5 rounded-sm bg-white">
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="/admin" icon={HiChartPie} className={pathName=="/admin" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Dashboard</SidebarItem>
                        <SidebarCollapse label="E-commerce" icon={HiShoppingBag} open={isEcommerceOpen}>
                            <SidebarItem href="/admin/ecommerce/products" className={pathName=="/admin/ecommerce/products" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Product list</SidebarItem>
                            <SidebarItem href="/admin/ecommerce/billing" className={pathName=="/admin/ecommerce/billing" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Billing</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse label="Categories" icon={HiOutlineViewGrid} open={isCategoriesOpen}>
                            <SidebarItem href="/admin/categories" className={pathName=="/admin/categories" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Category list</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse label="Users" icon={HiUsers} open={isUsersOpen}>
                            <SidebarItem href="/admin/users" className={pathName=="/admin/users" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Users list</SidebarItem>
                            <SidebarItem href="/admin/users/profile" className={pathName=="/admin/users/profile" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Profile</SidebarItem>
                        </SidebarCollapse>
                        <SidebarCollapse label="Orders" icon={HiShoppingCart} open={isOrdersOpen}>
                            <SidebarItem href="/admin/orders" className={pathName=="/admin/orders" ? "bg-gray-100 dark:bg-gray-700 px-5 " : "px-5"}>Order List</SidebarItem>
                        </SidebarCollapse>
                    </SidebarItemGroup>
                </SidebarItems>
            </div>
        </Sidebar>
    )
}
export default AdminSidebar;