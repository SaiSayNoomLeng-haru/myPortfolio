import { useOutletContext } from "react-router-dom"

export default function Description(){
    const { detailProducts } = useOutletContext();
   
    return(
        <>
           {detailProducts.productDetail}
        </>
    )
}
