import classNames from "classnames"
import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";

export default function CardImg({className = ''}){
    const { imageUrl, name } = useContext(ProductCardContext);
    const mainImg = imageUrl[0].img1;
    const imgClass = classNames(
        'object-cover',
        'h-[400px]',
        'mx-auto',
        className
    );
    return(
        <img className={imgClass} src={mainImg} alt={`${name}'s photo`} aria-label={`${name}'s image`}/>
    )
}