import { memo, useCallback, useContext, useMemo, useState } from "react"
import { getProducts } from "../Api"
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import PageTitle from "../Utilities Components/PageTitle";
import classNames from "classnames";
import Checkbox from "../Utilities Components/Checkbox-Filter/Checkbox";
import ProductCard from '../Utilities Components/Product-Card/ProductCardIndex';
import Banner from "../Utilities Components/Banner";
import { AppContext } from "../App";

export async function loader(){
    const loadProducts = await getProducts();
    const products = loadProducts.products;

    return products;
}

const Shop = () => {
    const products = useLoaderData()
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { handleCart, handleFav } = useContext(AppContext);
    

    const handleFilter = useCallback((key, value) => {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            const currentParams = newParams.getAll(key);

            if(value === null){
                newParams.delete(key)
            }

            if(currentParams.includes(value)){
                const updatedParams = currentParams.filter(v => v !== value);
                newParams.delete(key);
                updatedParams.forEach(v => newParams.append(key, v));
            }else{
                newParams.append(key, value)
            }

            return newParams;
        })
    }, [setSearchParams])

    const filters = useMemo(() => (
        {
            category: ['men', 'women'],
            type: ['t-shirt', 'jacket', 'coat', 'sweater', 'pajamas', 'handbag', 'sportwears', 'hat', 'shoes', 'glasses', 'watches'],
            color: ['white', 'black', 'gray', 'green', 'red', 'yellow', 'blue'],
            size: ['s', 'm', 'l', 'xl', 'xxl']
        }
    ), [])

    const renderFilterItems = useCallback((filterType, filterItem) => {
        const selectedFilters = searchParams.getAll(filterType)
       return filterItem.map(item => (
                <Checkbox
                key={item}
                item={item}
                filterType={filterType}
                checked={selectedFilters.includes(item)}
                handleFilter={handleFilter}
            />
        ))
    }, [handleFilter])

    const renderFilters = useCallback(() => (
        Object.entries(filters).map(([key, value]) => (
            <div key={key} className="py-3">
                <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>

                {renderFilterItems(key, value)}
            </div>
        ))
    ), [filters, renderFilterItems])

    const displayProducts = useMemo(() => {
        const activeFilters = Object.fromEntries(
            Object.keys(filters).map(key => [key, searchParams.getAll(key)])
    );
    
        return products.filter(product => {
            return Object.entries(activeFilters).every(([filterType, filterValues]) => {
                if (filterValues.length === 0) return true;
    
                return filterValues.some(value =>
                    product[filterType] === value.toLowerCase()
                );
            });
        });
    }, [products, searchParams, filters]);
    
    // classes
    const shopContainers = classNames(
        'grid md:grid-cols-shop p-5 gap-2 space-y-5'
    )

    const filterContainer = classNames(
        'divide-y-2 space-y-2'
    )

    const productsContainer = classNames(
        'p-3'
    )
    return(
        <section>
           <PageTitle  destination='shop'/>

           <div className={shopContainers}>
                <div className={filterContainer}>
                    <h2 className="text-lg font-semibold">Filter Options</h2>

                    {renderFilters()}
                </div>
                <div className={productsContainer}>
                    {searchParams.toString() && (
                        <button
                            className="bg-custom-dark p-2 text-white"
                            onClick={() => setSearchParams(new URLSearchParams())}
                        >
                            Clear filter
                        </button>
                    )}

                    <div className="grid md:grid-cols-3 max-35:grid-cols-1 gap-2">
                        {displayProducts.length > 0 ? (
                            displayProducts.map(product => (
                              
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                        className="flex flex-col gap-3 bg-custom-accent p-3 min-w-[200px] h-[550px]"
                                    >
                                        <div className="relative">
                                        <ProductCard.Image />
                                        <ProductCard.DiscountBadge className="absolute top-1 left-1" />
                                        <ProductCard.Action className="absolute top-1 right-1">
                                            <ProductCard.ToWishList onClick={() => handleFav(product)}/>
                                            <Link className="flex items-center justify-center bg-white rounded-full p-3 active:bg-custom-orange" to={`${product.id}`}>
                                                <ProductCard.ToDetail />
                                            </Link>
                                            <ProductCard.AddToCart onClick={() => handleCart(product)} />
                                        </ProductCard.Action>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <ProductCard.Type />
                                                <ProductCard.Rating />
                                            </div>
                                            <ProductCard.Name />
                                            <ProductCard.Price />
                                        </div>
                                    </ProductCard>
                                ))
                            ) : (
                            <p>No products match the selected filters.</p>)}
                    </div>
                </div>
           </div>

           <Banner className="md:max-w-[80%] md:mx-auto"/>
        </section>
    )
}

export default memo(Shop)