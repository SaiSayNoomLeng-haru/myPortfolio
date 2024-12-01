import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";
import classNames from "classnames";
import { getProductDetail } from "../../Api";


export default function ProductDetail(){
    const { productDetail } = useContext(ProductCardContext);
    const textArray = productDetail.split(' ')
    const text = `${textArray.slice(0, 10).join(' ')}...`

    const detailClass = classNames(
        'text-slate-600 text-sm', classNames
    )
    return(
        <p className={detailClass}>{text}</p>
    )
}