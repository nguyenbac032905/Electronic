"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarSidebar } from "../../_components";

const OrderDetailPage = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const id = params.id;
    const router = useRouter();
    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3001/api/orders/${id}`);
            const order = await res.json();
            if(order){
                setFormData(order);
                setLoading(false);
            }
        }
        fetchApi();
    },[id])

    const handleUpdate = () => {

    }

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "postalCode" ? Number(value) : value
        }))
    }
    
    if(loading){
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
    return(
        <NavbarSidebar isFooter={true}>
            <div className="px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">User Detail</h1>
                </div>
                <form
                    onSubmit={handleUpdate}
                    className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4"
                >
                    <div className="mb-8 pb-8 border-b border-gray-200">
                        <section className="">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 text-center">
                                Basic Information
                            </h2>
                            <div className="grid grid-cols-2 grid-cols-1 gap-6">
                                {formData && Object.entries(formData).map(([key, value]) => (
                                    <label key={key} className="form-control w-full">
                                        <span className="label-text font-semibold mb-2">
                                            {key}:
                                        </span>
                                        <input
                                            type="text"
                                            name={key}
                                            value={value as string}
                                            onChange={handleChange}
                                            placeholder={`${key}...`}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                    ))}
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
    )
}
export default OrderDetailPage