import classNames from "classnames";
import { useOutletContext } from "react-router-dom"

export default function AdditionalInformation(){
    const gridColor = classNames(
        'grid grid-cols-2 md:grid-cols-product-description md:gap-10 md:px-3 odd:bg-orange-100'
    )
    const { detailProducts } = useOutletContext();
    return(
        <div className="grid">
           <div className="grid grid-cols-product-description md:gap-10 bg-custom-orange font-semibold px-3">
                <p>Feature</p>
                <p>Description</p>
           </div>

            <div className={gridColor}>
                <p className="font-semibold">Brand: </p>
                <p className="capitalize">{detailProducts.brand}</p>
            </div>

            <div className={gridColor}>
                <p className="font-semibold">Sizes: </p>
                <p className="uppercase">{detailProducts.size.join(', ')}</p>
            </div>

            <div className={gridColor}>
                <p className="font-semibold">Colors: </p>
                <p className="uppercase">{detailProducts.availableColor.join(', ')}</p>
            </div>

            <div className={gridColor}>
                <p className="font-semibold">Original Price: </p>
                <p className="uppercase text-custom-orange font-bold">${detailProducts.price}</p>
            </div>

            <div className={gridColor}>
                <p className="font-semibold">Rating: </p>
                <p className="uppercase font-bold">{detailProducts.rating.toFixed(2)}</p>
            </div>
        </div>
    )
}

