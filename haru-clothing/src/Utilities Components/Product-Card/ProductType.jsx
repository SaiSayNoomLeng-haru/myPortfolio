import { useContext } from "react"
import { ProductCardContext } from "./ProductCard"
import classNames from "classnames";

export default function ProductType({className = ''}){
    const { type } = useContext(ProductCardContext);

    const productTypeClass = classNames(
        'text-slate-600 text-sm capitalize', className
    )
    return(
        <p className={productTypeClass}>{type}</p>
    )
}