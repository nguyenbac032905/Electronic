"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const router = useRouter();
    const searchProducts = (e: any) => {
        e.preventDefault();
        const keyword = e.target.keyword.value;
        router.push(`/search?search=${keyword}`);
        setSearchInput("");
    }
    return(
        <form className="flex w-full justify-center" onSubmit={searchProducts}>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" name="keyword" placeholder="Type here" className="input input-bordered w-[70%] w-[700px] max-[1320px]:w-[450px] rounded-r-none outline-none focus:outline-none max-sm:w-full" />
            <button type="submit" className="btn bg-custom-yellow border-black rounded-l-none rounded-r-xl hover:bg-black hover:text-custom-yellow hover:border-custom-yellow">Search</button>
        </form>
    )
}
export default SearchInput;