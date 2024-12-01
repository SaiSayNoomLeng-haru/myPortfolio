import classNames from "classnames";
import { FaBagShopping } from "react-icons/fa6";

export default function CardAddToCart({className = '', ...props}){
    const toCartClass = classNames(
        'p-3 bg-white rounded-full cursor-pointer ', className
    )
    return(
        <span className={toCartClass} {...props}>
            <FaBagShopping />
        </span>
    )
}