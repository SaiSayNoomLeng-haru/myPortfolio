import classNames from "classnames";
import { memo, useCallback, useContext, useMemo, useState } from "react";
import Banner from "../Utilities Components/Banner";
import Button from "../Utilities Components/Button";
import { getBlogs, getProducts, getReview } from "../Api";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogCard from "../Utilities Components/Blog-Card/BlogCardIndex";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Utilities Components/Product-Card/ProductCardIndex";
import Hero from "../Utilities Components/Hero";
import SubscribeEmail from "../Utilities Components/SubscribeEmail";
import UnorderList from "../Utilities Components/Undorder-List/UnorderList";
import ListItems from "../Utilities Components/Undorder-List/ListItems";
import ReviewContainer from "../Utilities Components/Review-Container/Review";
import { AppContext } from "../App";

export async function loader(){
   const loadProducts = await getProducts();
   const loadBlogs = await getBlogs();
   const loadReview = await getReview();

   const products = loadProducts.products;

   const topSellerProducts = products.filter(product => product.rating > 4);
  
   const topDiscountedProducts = products.filter(product => product.discount > 10 ).sort((a,b) => b.discount - a.discount);
 
   const instagramImg = products.map(product => product.imageUrl[0]);

   const blogs = loadBlogs.blogs;

   return { loadProducts,topSellerProducts, topDiscountedProducts, blogs, instagramImg, loadReview };
}

const Home = () => {
    const { topDiscountedProducts, topSellerProducts, instagramImg, blogs, loadProducts, loadReview } = useLoaderData() 
    || 
    {
        topDiscountedProducts: [],
        topSellerProducts: [],
        instagramImg: [],
        blogs: [],
        loadReview: [],
        loadProducts: []
    }

    const reviews = loadReview.reviews;
    const [ currentReview, setCurrentReview] = useState(0);
    const { handleCart, handleFav } = useContext(AppContext);

    const nextReviewSlide = () => {
        setCurrentReview(prevReview => (
            (prevReview + 1) % reviews.length
        ))
    }

    const prevReviewSlide = () => {
        setCurrentReview(prevReview => (
            prevReview === 0 ? reviews.length - 1 : prevReview - 1
        ))
    }

   const productCount = useCallback((categoryName) => (
        loadProducts.products.filter(product => product.category === categoryName ).length 
   ), [loadProducts.products])

    const womenItems = [
        'blazers',
        't-shirts',
        'blouses',
        'dresses',
        'jackets',
        'coats',
        'jeans'
    ]

    const menItems = [
        'blazers',
        't-shirts',
        'shirts',
        'jackets',
        'coats',
        'jeans'
    ]

    const accessoriesItem = [
        'handbags',
        'watches',
        'sunglasses',
        'hats'
    ]
    
    // classes
    const homeCategoryClass = classNames(
        'grid gap-2 md:grid-cols-2 md:grid-rows-2 p-5'
    )

    const newsLetterClass = classNames(
        'bg-white text-center p-3 flex flex-col gap-2 md:container'
    )

    const productContainerClass = classNames(
        'flex overflow-x-scroll gap-2 scroll-smooth'
    )

    const homeInstagram = classNames(
        'text-center overflow-x-hidden p-5 bg-custom-accent'
    )

    const testimonialContainerClass = classNames(
        'flex flex-col custom-container'
    )

    const blogsContainerClass = classNames(
        'flex flex-col md:flex-row overflow-x-scroll gap-10 md:gap-5 scroll-smooth p-5'
    )

    return(
        <section className="space-y-10 mb-10">
            <Hero 
                title='Step into Style: your Ultimate Fashion Destination'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in cum nesciunt repellat et beatae.'
                link='products'
                imgUrl='/assets/images/hero.png'
                badge='50% OFF Summer Super Sale'
            />

            <Banner className="custom-container"/>

            <div className={homeCategoryClass}>
                <Link to='women' className="flex flex-col gap-2 bg-custom-accent p-5 bg-womenwears md:row-span-2">
                    <p className="inline-block">
                        <span className="font-semibold bg-custom-orange text-white px-10">
                           {productCount('women')}
                           &nbsp;Items
                        </span>
                    </p>

                    <h2 className="text-3xl font-semibold">For Women's</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <UnorderList>
                        {womenItems.map(item => (
                            <ListItems key={item} className='capitalize text-custom-dark'>
                                {item}
                            </ListItems>
                        ))}
                    </UnorderList>
                </Link>

                <Link to='men' className="flex flex-col gap-2 bg-custom-accent p-5 bg-menwears">
                    <p className="inline-block">
                    <span className="font-semibold bg-custom-orange text-white px-10">
                            {productCount('men')}
                            &nbsp; Items
                        </span>
                    </p>

                    <h2 className="text-3xl font-semibold">For Men's</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <UnorderList>
                        {menItems.map(item => (
                            <ListItems key={item} className='capitalize text-custom-dark'>
                                {item}
                            </ListItems>
                        ))}
                    </UnorderList>
                </Link>

                <Link to='products' className="flex flex-col gap-2 bg-custom-accent p-5 bg-accessories">
                    <p className="inline-block">
                    <span className="font-semibold bg-custom-orange text-white px-10">
                            {productCount('accessories')}
                            &nbsp; Items
                        </span>
                    </p>

                    <h2 className="text-3xl font-semibold">Accessories</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <UnorderList>
                        {accessoriesItem.map(item => (
                            <ListItems key={item} className='capitalize text-custom-dark'>
                                {item}
                            </ListItems>
                        ))}
                    </UnorderList>
                </Link>
            </div>

            <div className=" flex flex-col gap-3 p-5">
                <p className="text-lg">Our products</p>
                <h2 className="text-3xl font-bold">Our Top Seller Products</h2>
                <div className={productContainerClass}>
                    { topSellerProducts
                        .map(product => (
                            <ProductCard key={product.id} {...product} className="flex flex-col gap-3 bg-custom-accent p-3 min-w-[300px] h-[600px]">
                                <div className="relative">
                                    <ProductCard.Image />
                                    <ProductCard.DiscountBadge className="absolute top-1 left-1" />
                                    <ProductCard.Action className='absolute top-1 right-1'>
                                        <ProductCard.ToWishList onClick={() => handleFav(product)} />
                                        <Link className="flex items-center justify-center bg-white rounded-full p-3 active:bg-custom-orange" to={`products/${product.id}`}>
                                            <ProductCard.ToDetail />
                                        </Link>
                                        <ProductCard.AddToCart onClick={() => handleCart(product)}/>
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
           
            <Hero 
                title='25% Off All Fashion Favorites - Limited Time!'
                badge='Limited Time Offers'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum, consequatur sed optio ea voluptatum.'
                link='products'
                imgUrl='/assets/images/hero2.png'
            />
            
            <div className=" flex flex-col gap-3 p-5">
                <p className="text-lg">Today Deals</p>
                <h2 className="text-3xl font-bold">Deals of the Day</h2>
                <div className={productContainerClass}>
                    {topDiscountedProducts.map(item => (
                        <ProductCard key={item.id}  {...item} className="flex gap-3 bg-custom-accent p-3 min-w-[500px] ">
                            <div className="relative flex-1">
                                <ProductCard.Image className="max-h-[300px]" />
                                <ProductCard.DiscountBadge className="absolute top-1 left-1"/>
                                <ProductCard.Action className='absolute top-1 right-1'>
                                    <ProductCard.ToWishList onClick={() => handleFav(item)}/>
                                    <Link className="flex items-center justify-center bg-white rounded-full p-3 active:bg-custom-orange" to={`products/${item.id}`}>
                                        <ProductCard.ToDetail />
                                    </Link>
                                    <ProductCard.AddToCart onClick={() => handleCart(item)}/>
                                </ProductCard.Action>
                            </div>
                            <div className="flex flex-col flex-1 gap-3">
                                <ProductCard.Type />
                                <ProductCard.Name />
                                <ProductCard.Price />
                                <ProductCard.Rating />
                                <ProductCard.Detail />
                            </div>
                        </ProductCard>
                    ))}
                </div>
            </div>

            <div className={homeInstagram}>
                <p>Follow Us</p>
                <h2 className="font-bold capitalize text-3xl">Follow us on instagram</h2>
                <a href="https://www.instagram.com" className="flex gap-2 max-w-1/2 md:w-1/5 translate-x-[-200%] animate-sliding mt-5">
                {instagramImg.map((item,index) => (
                    <img key={index} src={item} alt='products images from instagram' aria-label={`${item}'s photo from Instagram`} loading="lazy" className="h-[300px] min-w-[200px]"/>
                ))}
                </a>
            </div>

            <div className={testimonialContainerClass}>
                <p>Testimonial</p>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
                    <div className="space-y-2 md:space-x-3">
                        <Button onClick={nextReviewSlide} className="bg-custom-dark text-white active:bg-custom-orange active:text-black">
                            <FaArrowLeft />
                        </Button>

                        <Button onClick={prevReviewSlide} className="bg-custom-dark text-white active:bg-custom-orange active:text-black">
                            <FaArrowRight />
                        </Button>
                    </div>
                </div>

                <div>
                    { reviews.length > 0 ? (
                        <ReviewContainer >
                            <ReviewContainer.Image
                            {...reviews[currentReview]}/>
                            <ReviewContainer.Content 
                            {...reviews[currentReview]}/>
                        </ReviewContainer>
                    ) : null }
                </div>
            </div>

            <div className="text-center">
                <p>News & Blog</p>
                <h2 className="text-3xl font-bold">Our Latest News & Blogs</h2>
                <div className={blogsContainerClass}>
                    {blogs.map(blog => (
                        <Link to={`blogs/${blog.id}`}  key={blog.id} >
                            <BlogCard {...blog}>
                                <BlogCard.Header />
                                <BlogCard.Body />
                            </BlogCard>
                        </Link>
                    ))}
                </div>  
            </div>

            <div className={newsLetterClass}>
                <p className="text-lg">Our NewsLetter</p>

                <h2 className="text-3xl">Subscribe to Our Newsletter to Our Latest Collection</h2>

                <p className="text-sm text-slate-400">Get 20% off on your first order just by subscribing to our newsletter.</p>
                
                <SubscribeEmail />
            </div>
            
        </section>
    )
}

export default memo(Home);