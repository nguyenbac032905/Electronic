"use client"
import { usePaginationStore } from "@/app/_zustand/paginationStore";

const Pagination = () => {
    const {page, incrementPage, decrementPage, setPage} = usePaginationStore();
    return(
        <>
            <div className="join flex justify-center py-16">
                <button onClick={() => decrementPage()} className="join-item btn btn-lg bg-custom-yellow hover:bg-black hover:text-custom-yellow">«</button>
                <button onClick={() => setPage(1)} className="join-item btn btn-lg bg-custom-yellow hover:bg-black hover:text-custom-yellow">1</button>
                <button onClick={() => setPage(2)} className="join-item btn btn-lg bg-custom-yellow hover:bg-black hover:text-custom-yellow">2</button>
                <button onClick={() => incrementPage()} className="join-item btn btn-lg bg-custom-yellow hover:bg-black hover:text-custom-yellow">»</button>
            </div>
        </>
    )
}
export default Pagination;