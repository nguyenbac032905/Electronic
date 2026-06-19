"use client";
import { NavbarSidebar } from "@/app/(dashboard)/admin/_components";
import { CustomButton } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const AdminProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/products"
                );
                if (!response.ok) {
                    throw new Error("Fetch products failed");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    return (
        <NavbarSidebar isFooter={true}>
            <div className="overflow-x-auto w-full p-4">
                <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4">
                    <div className="flex justify-between mb-5 px-5">
                        <h1 className="text-3xl font-semibold">ALL PRODUCTS</h1>
                        <Link href={`/admin/ecommerce/products/new`}>
                            <CustomButton
                                buttonType="button"
                                customWidth="110px"
                                paddingX={5}
                                paddingY={3}
                                textSize="base"
                                text="Add new product"
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
                                <th>Product</th>
                                <th>Stock Availability</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products &&
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Image
                                                            width={48}
                                                            height={48}
                                                            src={`/${product?.mainImage}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                            className="w-auto h-auto"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product?.title}</div>
                                                    <div className="text-sm opacity-50">
                                                        {product?.manufacturer}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            25
                                            <br />
                                            <span className="badge badge-success text-white badge-sm">
                                                In stock
                                            </span>
                                        </td>
                                        <td>${product?.price}</td>
                                        <th>
                                            <Link href={`/admin/ecommerce/products/${product?.slug}`} className="btn btn-ghost btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Stock Availability</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </NavbarSidebar>
    )
}
export default AdminProductsPage;