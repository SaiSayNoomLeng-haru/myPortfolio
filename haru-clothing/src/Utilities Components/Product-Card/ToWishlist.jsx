import classNames from "classnames";
import { FaHeart } from "react-icons/fa";

export default function ToWhishlist({className='', ...props}){
    const towhishlistClass = classNames(
        'p-3 bg-white rounded-full cursor-pointer active:bg-custom-orange', className
    )
    return(
        <span className={towhishlistClass} {...props} >
            <FaHeart />
        </span>
    )
}