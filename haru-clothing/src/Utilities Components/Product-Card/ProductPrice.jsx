import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";
import classNames from "classnames";

export default function ProductPrice({className = ''}){
    const { price, discount} = useContext(ProductCardContext);
    const totalPrice = price - (price * (discount / 100));
    const priceClass = classNames(
        'text-xl font-semibold text-custom-orange', className
    )

    return(
        <p className={priceClass}>${totalPrice.toFixed(2)} <span className='line-through font-normal text-slate-600'>${price.toFixed(2)}</span></p>
    )
}