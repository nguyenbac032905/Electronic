"use client"
import { NavbarSidebar } from "@/app/(dashboard)/admin/_components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const NewProductPage = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        mainImage: "",
        price: 0,
        manufacturer: "",
        category: "",
        inStock: 1,
        description: "",
        slug: ""
    });
    const router = useRouter();

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name==="price"||name==="inStock" ? Number(value) : value
        }))
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = new FormData();
        form.append("title", formData.title);
        form.append("price", String(formData.price));
        form.append("manufacturer", formData.manufacturer);
        form.append("category", formData.category);
        form.append("description", formData.description);
        form.append("inStock", String(formData.inStock));
        form.append("slug",formData.slug);
        if(imageFile){
            form.append("mainImage", imageFile);
        }

        const res = await fetch(`http://localhost:3001/api/products`,{
            method: "POST",
            body: form
        });

        if(res.ok){
            toast.success("Product successfully created");
            router.push("/admin/ecommerce/products");
        }
    }
    return (
        <NavbarSidebar isFooter={true}>
            <div className="bg-white rounded-sm xl:p-8 sm:p-6 p-4 mt-4">
                <h1 className="text-3xl font-semibold text-center pb-8 border-b border-gray-200">New Product</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow xl:p-8 sm:p-6 p-4"
                >
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-8 pb-8 border-b border-gray-200">
                        <section className="lg:col-span-1">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                Product Image
                            </h2>
                            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 min-h-[300px]">
                                {formData.mainImage ? (
                                    <Image
                                        src={`/${formData.mainImage}`}
                                        alt="product image"
                                        width={250}
                                        height={300}
                                        className="object-cover rounded"
                                        priority
                                    />
                                ) : (
                                    <span className="text-gray-400">
                                        No image
                                    </span>
                                )}
                            </div>
                            <label className="form-control w-full mt-4">
                                <span className="label-text font-semibold mb-2">
                                    Upload Image
                                </span>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-sm w-full"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
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
                                        Product Name
                                    </span>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={handleChange}
                                        name="title"
                                        placeholder="Enter product name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Product Slug
                                    </span>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        name="slug"
                                        placeholder="Enter product slug"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Price ($)
                                    </span>
                                    <input
                                        type="number"
                                        value={formData.price}
                                        onChange={handleChange}
                                        name="price"
                                        placeholder="Enter price"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Manufacturer
                                    </span>
                                    <input
                                        type="text"
                                        name="manufacturer"
                                        value={formData.manufacturer}
                                        onChange={handleChange}
                                        placeholder="Enter manufacturer"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Category
                                    </span>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        placeholder="Enter category"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text font-semibold mb-2">
                                        Stock Availability
                                    </span>
                                    <select
                                        name="inStock"
                                        className="select select-bordered"
                                        onChange={handleChange}
                                        value={formData.inStock}
                                    >
                                        <option value={1}>Yes</option>
                                        <option value={0}>No</option>
                                    </select>
                                </label>
                                <label className="form-control w-full col-span-2">
                                    <span className="label-text font-semibold mb-2">
                                        Product Description
                                    </span>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter product description"
                                        className="textarea textarea-bordered w-full h-32"
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
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </NavbarSidebar>
    )
}
export default NewProductPage;