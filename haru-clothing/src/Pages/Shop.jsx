import { memo, useCallback, useMemo } from "react"
import { getProducts } from "../Api"
import { useLoaderData, useSearchParams } from "react-router-dom";
import PageTitle from "../Utilities Components/PageTitle";
import classNames from "classnames";
import Checkbox from "../Utilities Components/Checkbox-Filter/Checkbox";
import ProductCard from '../Utilities Components/Product-Card/ProductCardIndex';
import Banner from "../Utilities Components/Banner";

export async function loader(){
    const loadProducts = await getProducts();
    const products = loadProducts.products;

    return products;
}

const Shop = () => {
    const products = useLoaderData()
    const [ searchParams, setSearchParams ] = useSearchParams();

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
            types: ['t-shirt', 'jacket', 'coat', 'sweater', 'pajamas', 'handbag', 'sportwears', 'hat', 'shoes', 'glasses', 'watches'],
            brands: ['puma', 'gucci', 'nike', 'adidas', 'saint-laurent', 'louis-vuitton', 'rolex', 'normal'],
            colors: ['white', 'black', 'gray', 'green', 'red', 'yellow', 'blue'],
            sizes: ['s', 'm', 'l', 'xl', 'xxl']
        }
    ), [])

    const renderFilterItems = useCallback((filterType, filterItem) => {
       return filterItem.map(item => (
            <Checkbox 
                key={item}
                item={item}
                filterType={filterType}
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
   
    const selectedFilters = useMemo(() => {
        const selected = {};

        Object.keys(filters).forEach(filter => {
            const values = searchParams.getAll(filter);
            if(values.length){
                selected[filter] = values;
            }
        })

        return selected;
    }, [searchParams])

    const displayProducts = useMemo(() => {
        return Object.entries(selectedFilters).map((type, value) => console.log(value))
    } , [products, selectedFilters])
   


    // classes
    const shopContainers = classNames(
        'grid grid-cols-shop p-5 gap-2 space-y-5'
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
                    <h2>products</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {products
                            .map(product => (
                            <ProductCard key={product.id} {...product} className="flex flex-col gap-3 bg-custom-accent p-3 min-w-[200px]">
                            <div className="relative">
                                 <ProductCard.Image />
                                 <ProductCard.DiscountBadge className="absolute top-1 left-1" />
                                 <ProductCard.Action className='absolute top-1 right-1'>
                                     <ProductCard.ToWishList />
                                     <ProductCard.ToDetail />
                                     <ProductCard.AddToCart />
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
                        ))}
                    </div>
                </div>
           </div>

           <Banner className="md:max-w-[80%] md:mx-auto"/>
        </section>
    )
}

export default memo(Shop)