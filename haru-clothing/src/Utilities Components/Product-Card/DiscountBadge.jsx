import classNames from "classnames"
import { useContext } from "react"
import { ProductCardContext } from "./ProductCard"

export default function DiscountBadge({className = ''}){
    const { discount } = useContext(ProductCardContext)
    const discountBadgeClass = classNames(
        'bg-white',
        'py-2',
        'px-3',
        'text-custom-green',
        className
    )
    return(
        <p className={discountBadgeClass}>{discount}% off</p>
    )
}