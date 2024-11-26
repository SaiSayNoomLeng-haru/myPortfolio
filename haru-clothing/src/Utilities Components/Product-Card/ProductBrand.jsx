import { useContext } from "react";
import { ProductCardContext } from "./ProductCard";

export default function ProductBrand(){
    const { brand } = useContext(ProductCardContext);
    return(
        <p>{brand}</p>
    )
}