"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarSidebar } from "@/app/(dashboard)/admin/_components";
import Image from "next/image";

const UserDetailPage = () => {
    const [user, setUser] = useState<User>({id: "", email: "", password: null});
    const [imageFile, setImageFile] = useState<File | null>(null);
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3001/api/users/${id}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
        };
        fetchApi();
    }, [id]);

    if (!user) {
        return (
            <NavbarSidebar isFooter={true}>
                <div className="px-4 py-6">
                    <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4">
                        <p className="text-center text-gray-500">Loading...</p>
                    </div>
                </div>
            </NavbarSidebar>
        );
    }

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleUpdate = () => {

    }
    return (
        <NavbarSidebar isFooter={true}>
            <div className="px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">User Detail</h1>
                </div>
                <form
                    onSubmit={handleUpdate}
                    className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4"
                >
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-8 pb-8 border-b border-gray-200">
                        <section className="lg:col-span-1">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                Product Image
                            </h2>
                            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 min-h-[300px]">
                                <span className="text-gray-400">avatar</span>
                            </div>
                            <label className="form-control w-full mt-4">
                                <span className="label-text font-semibold mb-2">
                                    Upload Image
                                </span>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-sm w-full"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const file = e.target.files?.[0];
                                        if (!file) return;
                                        setImageFile(file);
                                    }}
                                />
                            </label>
                        </section>
                        <section className="lg:col-span-2">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">
                                Basic Information
                            </h2>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Email: 
                                    </span>
                                    <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        placeholder="Email..."
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </section>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            type="submit"
                            className="flex-1 btn btn-primary font-semibold"
                        >
                            Update User
                        </button>
                        <button
                            type="button"
                            className="flex-1 btn btn-error font-semibold text-white"
                        >
                            Delete User
                        </button>
                        <button
                            type="button"
                            className="flex-1 btn btn-outline font-semibold"
                            onClick={() => router.push("/admin/users")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </NavbarSidebar>
    );
};
export default UserDetailPage;
