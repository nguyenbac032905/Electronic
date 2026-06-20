"use client"
import { CustomButton } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarSidebar } from "@/app/(dashboard)/admin/_components";

const UserListPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3001/api/users`);
            const users = await res.json();
            setUsers(users);
        };
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
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.length>0 &&
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>{user.email}</td>
                                        <td>Admin</td>
                                        <th>
                                            <Link href={`/admin/users/${user.id}`} className="btn btn-ghost btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </NavbarSidebar>
    );
};
export default UserListPage;
