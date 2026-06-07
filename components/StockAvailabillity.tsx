import { FaCheck, FaXmark } from "react-icons/fa6";

const StockAvailabillity = ({stock} : {stock:number}) => {
    return (
        <p className="flex text-xl gap-x-2">
            Availability:
            {stock>0 ? <span className="flex items-center text-success gap-x-1">Instock <FaCheck /></span> : <span className="text-error flex items-center gap-x-1">Out of stock <FaXmark /></span>}
        </p>
    )
}
export default StockAvailabillity;