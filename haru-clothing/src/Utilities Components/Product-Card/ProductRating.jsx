import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";
import classNames from "classnames";
import { FaStar } from "react-icons/fa";

export default function ProductRating({className = ''}){
    const { rating } = useContext(ProductCardContext);
    const ratingClass = classNames(
        'font-semibold flex items-center'
    )
    return(
        <p className={ratingClass}>
            <FaStar  className="text-custom-orange"/> &nbsp;
            {rating.toFixed(1)}
        </p>
    )
}