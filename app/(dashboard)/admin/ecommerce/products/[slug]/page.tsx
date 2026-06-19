"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarSidebar } from "../../../_components";

const ProductDetailPage = () => {
    const params = useParams();
    const slug = params.slug;
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        mainImage: "",
        price: 0,
        manufacturer: "",
        category: "",
        inStock: 1,
        description: "",
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/products/${slug}`);
                const data = await res.json();
                setFormData({
                    title: data.title || "",
                    mainImage: data.mainImage || "",
                    price: data.price || 0,
                    manufacturer: data.manufacturer || "",
                    category: data.category || "",
                    inStock: data.inStock || 1,
                    description: data.description || "",
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, [slug]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (loading) {
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

    return (
        <NavbarSidebar isFooter={true}>
            <div className="px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>
                    <p className="text-gray-600 mt-1">{formData?.title}</p>
                </div>

                {/* Main Content Box */}
                <div className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4">
                    {/* Image and Basic Info Section */}
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-8 pb-8 border-b border-gray-200">
                        {/* Product Image */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Product Image</h2>
                            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 min-h-[300px]">
                                {formData?.mainImage ? (
                                    <Image
                                        src={`/${formData.mainImage}`}
                                        alt={formData.title}
                                        width={250}
                                        height={300}
                                        className="object-cover rounded"
                                        priority
                                    />
                                ) : (
                                    <span className="text-gray-400">No image</span>
                                )}
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-semibold">Upload Image</span>
                                    </div>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-sm w-full"
                                        multiple
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="lg:col-span-2">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Basic Information</h2>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Product Name</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="Enter product name"
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Price ($)</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Enter price"
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Manufacturer</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="manufacturer"
                                            value={formData.manufacturer}
                                            onChange={handleChange}
                                            placeholder="Enter manufacturer"
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Category</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            placeholder="Enter category"
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-semibold">Stock Availability</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option value={1} selected={formData?.inStock===1}>Yes</option>
                                            <option value={0} selected={formData?.inStock===0}>No</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Description</h2>
                        <label className="form-control w-full">
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                className="textarea textarea-bordered w-full h-32"
                            />
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            type="button"
                            className="flex-1 btn btn-primary font-semibold"
                        >
                            Update Product
                        </button>
                        <button
                            type="button"
                            className="flex-1 btn btn-error font-semibold text-white"
                        >
                            Delete Product
                        </button>
                        <button
                            type="button"
                            className="flex-1 btn btn-outline font-semibold"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </NavbarSidebar>
    );
};

export default ProductDetailPage;
