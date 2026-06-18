"use client";
import Image from "next/image";
import { HeaderTop, SearchInput, CartElement, HeartElement } from "@/components";
import { FaCodeCompare } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBell } from "react-icons/fa";

const Header = () => {
    const pathName = usePathname();
    return (
        <header className="shadow-sm">
            <HeaderTop />
            {pathName.startsWith("/admin") ? (
                <div className="flex justify-between h-32 bg-white items-center px-16 max-[1320px]:px-10  max-w-screen-2xl mx-auto max-[400px]:px-5">
                    <Link href="/">
                        <Image
                            src="/logo v1.png"
                            width={130}
                            height={130}
                            alt="singitronic logo"
                            className="w-48 h-auto"
                        />
                    </Link>
                    <div className="flex items-center gap-x-5">
                        <FaBell className="text-xl cursor-pointer"/>
                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} className="w-10 cursor-pointer">
                                <Image src="/randomuser.jpg" alt="random avatar user" width={30} height={30} className="rounded-full w-full h-auto" />
                            </button>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow rounded-box w-52 menu">
                                <li><a>Dashboard</a></li>
                                <li><a>Profile</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-32 flex items-center justify-between px-16 max-[1320px]:px-10 
                max-md:px-6 max-lg:flex-col max-lg:gap-y-7 max-lg:justify-center  max-lg:h-52 max-w-screen-2xl mx-auto">
                    <Link href={"/"}><Image src="/logo v1.png" alt="singitronic logo" width={200} height={200} /></Link>
                    <SearchInput />
                    <div className="flex gap-x-10">
                        <div className="relative">
                            <FaCodeCompare className="text-2xl" />
                            <span className="block w-5 h-5 bg-custom-yellow rounded-full flex justify-center items-center absolute top-[-10px] right-[-20px]">21</span>
                        </div>
                        <HeartElement />
                        <CartElement />
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header;