"use client"
import { SectionTitle } from "@/components";
import { useProductStore } from "../_zustand/store";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const productsTest = [
  {
    id: 1,
    title: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    amount: 1,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  {
    id: 2,
    title: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    amount: 1,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  }
];

const steps = [
    {name: "Cart", href:"#", status: "complete"},
    {name: "Billing Information", href: "#", status: "current"},
    {name: "Confirmation", href: "#", status: "upcoming"},
];

const CheckoutPage = () => {
    const {products, removeFromCart, calculateTotals, total} = useProductStore();
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        cardName: "",
        cardNumber: "",
        expirationDate: "",
        cvc: "",
        company: "",
        address: "",
        apartment: "",
        city: "",
        country: "",
        postalCode: 0
  });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3001/api/orders`,{
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(formData)
        });
        if(res.ok){
            toast.success("Tạo đơn hàng thành công.");
        }
    };
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name==="postalCode" ? Number(value) : value
        }))
    }
    return (
        <div className="bg-white">
            <SectionTitle title="Checkout" path="Home | Cart | Checkout"/>
            <main className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto gap-x-16">
                <section className="col-span-1 p-8">
                    <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-3 mb-3">Product List:</h2>
                    <ul className="divide-y divide-gray-200">
                        {productsTest.map((item,index) => (
                            <li key={index} className="flex items-start space-x-4 py-6">
                                <Image src={`${item.image}`} alt={item.title} width={80} height={80} className="h-20 w-20 rounded-md object-cover"/>
                                <div className="flex-auto space-y-1">
                                    <h3>{item.title}</h3>
                                    <p className="text-gray-500">Quantity: <span className="font-medium text-black">{item.amount}</span></p>
                                </div>
                                <p className="flex-none">Price: <span className="font-medium">{item.price}</span></p>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-medium text-gray-900 border-y border-gray-200 py-3 my-3">Order summary:</h2>
                    <dl>
                        <div className="flex items-center justify-between py-2">
                            <dt className="font-medium text-gray-600 text-md">Subtotal:</dt>
                            <dd className="font-semibold">${total}</dd>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <dt className="font-medium text-gray-600 text-md">Shipping:</dt>
                            <dd className="font-semibold">$5</dd>
                        </div>
                        <div className="flex items-center justify-between pt-2 pb-5 border-b border-gray-200">
                            <dt className="font-medium text-gray-600 text-md">Taxes:</dt>
                            <dd className="font-semibold">$0</dd>
                        </div>
                        <div className="flex items-center justify-between py-2 text-2xl">
                            <dt className="font-medium text-gray-900">Total:</dt>
                            <dd className="font-semibold">$0</dd>
                        </div>
                    </dl>
                </section>
                <section className="col-span-1 p-8">
                    <form onSubmit={handleSubmit}>
                        <section>
                            <h2 className="text-xl font-medium text-gray-900 ">Contact Information</h2>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="mt-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name:
                                    </label>
                                    <input type="text" onChange={handleChange} id="name" value={formData.name} name="name" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                        Last name:
                                    </label>
                                    <input type="text" onChange={handleChange} id="lastname" value={formData.lastname} name="lastname" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address:
                                    </label>
                                    <input type="email" onChange={handleChange} id="email" value={formData.email} name="email" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone:
                                    </label>
                                    <input type="text" onChange={handleChange} id="phone" value={formData.phone} name="phone" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-xl font-medium text-gray-900 ">Payment details</h2>
                            <div className="grid sm:grid-cols-4 grid-cols-3 gap-x-4">
                                <div className="mt-6 col-span-3 sm:col-span-4">
                                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                                        Card name:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.cardName} id="cardName" name="cardName" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-3 sm:col-span-4">
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                        Card number:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.cardNumber} id="cardNumber" name="cardNumber" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-2 sm:col-span-3">
                                    <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                                        Expiration date (MM/YY):
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.expirationDate} id="expirationDate" name="expirationDate" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-1">
                                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                        CVC
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.cvc} id="cvc" name="cvc" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                            </div> 
                        </section>
                        <section>
                            <h2 className="text-xl font-medium text-gray-900 ">Shipping address</h2>
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-4">
                                <div className="mt-6 col-span-1 sm:col-span-3">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                        Company
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.company} id="company" name="company" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-3">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.address} id="address" name="address" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-3">
                                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                        Apartment, suite, etc:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.apartment} id="apartment" name="apartment" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-1">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.country} id="country" name="country" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-1">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.city} id="city" name="city" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                                <div className="mt-6 col-span-1 sm:col-span-1">
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                                        Postal code:
                                    </label>
                                    <input type="text" onChange={handleChange} value={formData.postalCode} id="postalCode" name="postalCode" className="border border-gray-300 w-full rounded-md py-2 px-5 focus:outline-none focus:ring-inset focus:ring-blue-500 focus:ring-2 mt-1"/>
                                </div>
                            </div> 
                        </section>
                        <div className="border-t border-gray-200 pt-6 mt-2">
                            <button type="submit" className="bg-custom-yellow w-full rounded-sm text-xl font-medium py-2 cursor-pointer ring-inser ring-black ring-2 hover:bg-black hover:text-white">Pay Now</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}
export default CheckoutPage;