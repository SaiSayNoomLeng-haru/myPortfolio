import { memo, useCallback, useContext, useState } from "react"
import { getProductDetail, getProducts } from "../Api";
import { Link, Navigate, NavLink, Outlet, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import PageTitle from "../Utilities Components/PageTitle";
import classNames from "classnames";
import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
import Button from "../Utilities Components/Button";
import { AppContext } from "../App";
import ProductCard from "../Utilities Components/Product-Card/ProductCardIndex";
import Banner from "../Utilities Components/Banner";

export async function loader({params}) {
    const loadDetail = await getProductDetail(params.id);
    const loadAllProducts = await getProducts();
    
    const detailProducts = loadDetail.products;
    const allProducts = loadAllProducts.products;
    
    return {detailProducts, allProducts} ;
}

export default function ProductDetail(){
    const {detailProducts, allProducts} = useLoaderData();
  
    const { availableColor, brand, category, discount, id, imageUrl, name, price,  productDetail : description , rating, size, type } = detailProducts;
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const { handleCart, handleFav } = useContext(AppContext);

    const relatedProducts = allProducts.filter(product => product.type === type);
    
    const totalPrice = price - (price * (discount / 100))

    const nextSlide = useCallback(() => {
            setCurrentIndex(prevIndex => (
                (prevIndex + 1) % imageUrl.length
            ))
        }, [imageUrl.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (
            (prevIndex - 1 + imageUrl.length) % imageUrl.length
        ))
    },[imageUrl.length]);

  
    // classes
    const headerContainer = classNames(
        'custom-container grid md:grid-cols-2 gap-5' 
    )

    const photoContainer = classNames(
        'grid gap-3 grid-rows-product p-3'
    )

    const contentContainer = classNames(
        'flex flex-col gap-3 p-1 items-start justify-between'
    )
    
    const activeStyle = {
        borderColor : 'bg-custom-orange'
    }

    const activeNav = {
        borderBottom: '3px solid bg-custom-orange'
    }
    return(
        <section>
            <PageTitle destination='Product Details' />
            
            <Link 
                to='..' 
                relative="path"
                className=" bg-custom-orange inline-block m-5 px-4 py-2">
                <FaArrowLeft className="inline"/>   Back to Products
            </Link>
            
            
            <div className={headerContainer}>
                <div className={photoContainer}>
                    <div 
                        className="flex p-2"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowLeft") prevSlide();
                            if (e.key === "ArrowRight") nextSlide();
                        }}
                    >
                        <Button onClick={prevSlide}>
                            <FaArrowLeft />
                        </Button>
                        <img src={imageUrl[currentIndex]} alt="" className="max-w-[60%] mx-auto"/>
                        <Button onClick={nextSlide}>
                            <FaArrowRight />
                        </Button>
                    </div>

                    <div className="flex gap-2 px-2 overflow-x-scroll scroll-auto h-[200px]">
                        {imageUrl.map((photo, index) => (
                            <img src={photo} key={index} className={` ${ index === currentIndex ? 'border-4 border-custom-green' : ''}`} onClick={() => setCurrentIndex(index)}/>
                        ))}
                    </div>
                </div>

                <div className={contentContainer}>
                    <p className="capitalize text-slate-500 font-semibold">{category}</p>
                    <p className="text-lg font-bold">{name}</p>
                    <p className="flex gap-2  items-center"><FaStar  className="text-custom-orange"/> {rating.toFixed(2)}</p>
                    <p className="font-semibold">Brand: <span className="uppercase font-normal">{brand}</span></p>
                    <p className="font-semibold">Description: <span className="font-normal">{description}</span></p>
                    
                    <div className="flex gap-5">
                        <p className="font-semibold flex-none">Available Sizes : </p>
                        <div className="flex-1">
                        {
                            size.map((item, index) => (
                                <span key={index} className="uppercase font-bold ml-4">{item}</span>
                            ))
                        }
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <p className="font-semibold flex-none">Available Colors : </p>
                        <div className="flex-1">
                        {
                            availableColor.map((item, index) => (
                                <span key={index} className="capitalize font-semibold ml-4">{item}</span>
                            ))
                        }
                        </div>
                    </div>

                    <p className="font-semibold">Type: <span className="capitalize font-normal">{type}</span></p>

                    <p className="font-semibold">Price: <span className="capitalize font-bold text-custom-dark">${totalPrice.toFixed(2)}</span> <span className="line-through font-semibold text-red-700">${price.toFixed(2)}</span></p>

                    <div className="flex gap-2 justify-between">
                        <Button onClick={() => handleCart(detailProducts)} className="bg-custom-dark text-white min-w-full">Add To Cart</Button>
                        <Button className="border " onClick={() => handleCart(detailProducts)}>
                            <FaHeart />
                        </Button>
                    </div>

                </div>

            </div>

            <div className="custom-container bg-custom-accent m-5 p-5">
                <div className='flex justify-center custom-cotainer mb-5 gap-10'>
                    <NavLink 
                        to='.'
                        relative="path"
                        end
                        className={({isActive}) => isActive ? 'border-b-4 border-custom-orange' : ''}>
                        Description
                    </NavLink>

                    <NavLink 
                        to='additional-information'
                        className={({isActive}) => isActive ? 'border-b-4 border-custom-orange' : ''}
                        >
                        Additional Information
                    </NavLink>
                </div>

                <div className="md:max-w-[80%] md:mx-auto my-2 ">
                    <Outlet context={{detailProducts}}/>
                </div>
            </div>

            <div className="custom-container space-y-5">
                <p className="text-center">Related Products</p>
                <h2 className="text-center font-semibold">Explore Related Products</h2>
                <div className="flex overflow-x-scroll gap-2 scroll-smooth">
                {
                    relatedProducts.map(product => (
                            <ProductCard
                            key={product.id}
                            {...product}
                            className="flex flex-col gap-3 bg-custom-accent p-3 min-w-[250px] h-[550px]"
                            >
                            <div className="relative">
                            <ProductCard.Image />
                            <ProductCard.DiscountBadge className="absolute top-1 left-1" />
                            <ProductCard.Action className="absolute top-1 right-1">
                                <ProductCard.ToWishList onClick={() => handleFav(product)}/>
                                <Link to={`/products/${product.id}`} className="flex items-center justify-center bg-white rounded-full p-3" >
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
                }
                </div>
                
            </div>

            <Banner className="custom-container !my-10" />
           
        </section>

    )
}
