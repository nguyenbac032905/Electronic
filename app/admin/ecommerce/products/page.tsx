import {NavbarSidebar} from "@/app/admin/_components";
const AdminProductsPage = () => {
    return (
        <NavbarSidebar isFooter={true}>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h3>Product name</h3>
                    <p>10$</p>
                    <button>delete product</button>
                </div>
            </div>
        </NavbarSidebar>
    )
}
export default AdminProductsPage;