import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductItemRating = ({productRating}: {productRating: number}) => {
    const rating = Array(5).fill("empty star");
    
    for(let i=0; i<productRating; i++){
        rating[i] = "full star";
    }
    return (
        <div className="flex text-custom-yellow">
            {rating.map((item,index) => (item==="full star" ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>))}
        </div>
    )
}
export default ProductItemRating;