"use client"
import { useEffect, useState } from "react";
import {NavbarSidebar} from "@/app/(dashboard)/admin/_components";
import Link from "next/link";
import { CustomButton } from "@/components";

const OrderListPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3001/api/orders`);
            const orders = await res.json();
            setOrders(orders);
        }
        fetchApi();
    }, []);
    
    return (
        <NavbarSidebar isFooter={true}>
            <div className="overflow-x-auto w-full p-4">
                <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4">
                    <div className="flex justify-between mb-5 px-5">
                        <h1 className="text-3xl font-semibold">ALL USERS</h1>
                        <Link href={`/admin/users/new`}>
                            <CustomButton
                                buttonType="button"
                                customWidth="110px"
                                paddingX={5}
                                paddingY={3}
                                textSize="base"
                                text="Add new user"
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
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders?.length > 0 &&
                                orders.map((item, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>{item.name}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <th>
                                            <Link href={`/admin/orders/${item.id}`} className="btn btn-ghost btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </NavbarSidebar>
    )
}
export default OrderListPage;