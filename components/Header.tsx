import Image from "next/image";
import {HeaderTop,SearchInput, CartElement} from "@/components";
import { FaCodeCompare, FaHeart } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <div className="h-32 flex items-center justify-between px-16 max-[1320px]:px-10 
                max-md:px-6 max-lg:flex-col max-lg:gap-y-7 max-lg:justify-center  max-lg:h-52 max-w-screen-2xl mx-auto">
                <Link href={"/"}><Image src="/logo v1.png" alt="singitronic logo" width={200} height={200} /></Link>
                <SearchInput />
                <div className="flex gap-x-10">
                    <div className="relative">
                        <FaCodeCompare className="text-2xl"/>
                        <span className="block w-5 h-5 bg-custom-yellow rounded-full flex justify-center items-center absolute top-[-10px] right-[-20px]">21</span>
                    </div>
                    <div className="relative">
                        <FaHeart className="text-2xl"/>
                        <span className="block w-5 h-5 bg-custom-yellow rounded-full flex justify-center items-center absolute top-[-10px] right-[-20px]">2</span>
                    </div>
                    <CartElement />
                </div>
            </div>
        </header>
    )
}
export default Header;