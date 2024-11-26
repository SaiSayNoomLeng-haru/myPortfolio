import classNames from "classnames";
import { FaHeart } from "react-icons/fa";

export default function ToWhishlist(){
    const towhishlistClass = classNames(
        'p-3 bg-white rounded-full'
    )
    return(
        <span className={towhishlistClass}>
            <FaHeart />
        </span>
    )
}