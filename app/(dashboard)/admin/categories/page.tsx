"use client"
import { useEffect, useState } from "react";
import { NavbarSidebar } from "../_components";
import Link from "next/link";
import { CustomButton } from "@/components";

const CategoriesPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3001/api/categories`);
            const data = await res.json();
            if(res.ok){
                setCategories(data);
            }
        };
        fetchApi();
    },[])
    return (
        <NavbarSidebar isFooter={true}>
            <div className="overflow-x-auto w-full p-4">
                <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4">
                    <div className="flex justify-between mb-5 px-5">
                        <h1 className="text-3xl font-semibold">Categories</h1>
                        <Link href={`/admin/categories/new`}>
                            <CustomButton
                                buttonType="button"
                                customWidth="110px"
                                paddingX={5}
                                paddingY={3}
                                textSize="base"
                                text="Add new category"
                            />
                        </Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.length>0 &&
                                categories.map((item, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>{item.name}</td>
                                        <th>
                                            <Link href={`/admin/categories/${item.id}`} className="btn btn-ghost btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </NavbarSidebar>
    )
}
export default CategoriesPage;