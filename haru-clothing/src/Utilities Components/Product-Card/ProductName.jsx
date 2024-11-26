import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";
import classNames from "classnames";

export default function ProductName({className = ''}){
    const {name} = useContext(ProductCardContext);
    const nameClass = classNames(
        'text-lg font-semibold', className
    )
    return(
        <h2 className={nameClass}>{name}</h2>
    )
}