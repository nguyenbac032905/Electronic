import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProductRate = ({reviews}:{reviews: number}) => {
    return (
        <>
            <div className="flex items-center text-2xl">
                <AiFillStar className="text-custom-yellow"/>
                <AiFillStar className="text-custom-yellow"/>
                <AiFillStar className="text-custom-yellow"/>
                <AiFillStar className="text-custom-yellow"/>
                <AiOutlineStar className="text-custom-yellow"/>
                <span className="text-xl ml-1">({reviews} reviews)</span>
            </div>
        </>
    )
}
export default SingleProductRate;