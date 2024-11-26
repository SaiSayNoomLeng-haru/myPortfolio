import classNames from "classnames"
import { createContext } from "react"

const ProductCardContext = createContext();
export default function ProductCard({children, className = '', ...props}){
    const allProps = props;
    const cardClasses = classNames(
        className
    )
    return(
        <ProductCardContext.Provider value={allProps}>
            <div className={cardClasses}>
                {children} 
             </div>
        </ProductCardContext.Provider>
    )
}

export { ProductCardContext }