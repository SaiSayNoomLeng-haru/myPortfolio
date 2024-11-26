import classNames from "classnames";
import { FaBagShopping } from "react-icons/fa6";


export default function CardAddToCart({className = ''}){
    const toCartClass = classNames(
        'p-3 bg-white rounded-full', className
    )
    return(
        <span className={toCartClass}>
            <FaBagShopping />
        </span>
    )
}