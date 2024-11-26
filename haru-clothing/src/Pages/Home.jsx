import classNames from "classnames";
import { memo, useState } from "react";
import CtaLink from "../Utilities Components/CtaLink";
import Banner from "../Utilities Components/Banner";
import Button from "../Utilities Components/Button";
import { getBlogs, getProducts } from "../Api";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogCard from "../Utilities Components/Blog-Card/BlogCardIndex";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Utilities Components/Product-Card/ProductCardIndex";
import Hero from "../Utilities Components/Hero";
import SubscribeEmail from "../Utilities Components/SubscribeEmail";

export async function loader(){
   const loadProducts = await getProducts();
   const loadBlogs = await getBlogs();

   const products = loadProducts.products;

   const topSellerProducts = products.filter(product => product.rating > 4);

   const topDiscountedProducts = products.filter(product => product.discount > 10 ).sort((a,b) => b.discount - a.discount);

   const instagramImg = products.map(product => product?.imageUrl[1]?.img2);

   const blogs = loadBlogs.blogs;

   return { topSellerProducts, topDiscountedProducts, blogs, instagramImg };
}

const Home = () => {
    const { topDiscountedProducts, topSellerProducts, instagramImg, blogs } = useLoaderData();
    
    // classes
    const homeCategoryClass = classNames(
        'grid gap-2 md:grid-cols-2 md:grid-rows-2 p-5'
    )

    const newsLetterClass = classNames(
        'bg-white text-center p-3 flex flex-col gap-2 md:container'
    )

    const homeTopsellerContainerClass = classNames(
        'flex overflow-x-scroll gap-2 scroll-smooth'
    )

    const homeTopDiscountClass = classNames(
        'flex overflow-x-scroll gap-2 scroll-smooth snap-center'
    )

    const homeInstagram = classNames(
        'text-center overflow-x-hidden p-5 bg-custom-accent'
    )

    const testimonialContainerClass = classNames(
        'grid grid-cols-2 gap-2 p-5'
    )

    const blogsContainerClass = classNames(
        'flex overflow-x-scroll gap-2 scroll-smooth p-5'
    )

    return(
        <section className="space-y-10">
            <Hero 
                title='Step into Style: your Ultimate Fashion Destination'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in cum nesciunt repellat et beatae.'
                link='shop'
                imgUrl='/assets/images/hero.png'
                badge='50% OFF Summer Super Sale'
            />

            <Banner className="md:max-w-[80%] md:mx-auto"/>

            <div className={homeCategoryClass}>
                <Link to='shop' className="flex flex-col gap-2 bg-custom-accent p-5 bg-womenwears md:row-span-2">
                    <p className="inline-block">
                        <span className="font-semibold bg-white">2500+</span>
                        Items
                    </p>

                    <h2 className="text-3xl font-semibold">For Women's</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <ul>
                        <li>Blazers</li>
                        <li>T-Shirts and Blouses</li>
                        <li>Dresses</li>
                        <li>Jackets & Coats</li>
                        <li>Jeans</li>
                        <li>Knit</li>
                        <li>Sarees</li>
                    </ul>
                </Link>

                <Link to='shop' className="flex flex-col gap-2 bg-custom-accent p-5 bg-menwears">
                    <p className="inline-block">
                        <span className="font-semibold bg-white">1500+</span>
                        Items
                    </p>

                    <h2 className="text-3xl font-semibold">For Men's</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <ul>
                        <li>T-Shirts and Blouses</li>
                        <li>Jackets & Coats</li>
                        <li>Jeans</li>
                    </ul>
                </Link>

                <Link to='shop' className="flex flex-col gap-2 bg-custom-accent p-5 bg-accessories">
                    <p className="inline-block">
                        <span className="font-semibold bg-white">1500+</span>
                        Items
                    </p>

                    <h2 className="text-3xl font-semibold">Accessories</h2>

                    <p className="max-w-[50%] text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, distinctio?</p>

                    <ul>
                        <li>HandBags</li>
                        <li>Watches</li>
                        <li>Sunglasses</li>
                        <li>hat</li>
                    </ul>
                </Link>
            </div>

            <div className=" flex flex-col gap-3 p-5">
                <p className="text-lg">Our products</p>
                <h2 className="text-3xl font-bold">Our Top Seller Products</h2>
                <div className={homeTopsellerContainerClass}>
                    {  topSellerProducts
                            .map(product => (
                                <ProductCard key={product.id} {...product} className="flex flex-col gap-3 bg-custom-accent p-3 min-w-[300px]">
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
           
            <Hero 
                title='25% Off All Fashion Favorites - Limited Time!'
                badge='Limited Time Offers'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum, consequatur sed optio ea voluptatum.'
                link='shop'
                imgUrl='/assets/images/hero2.png'
            />
            
            <div className=" flex flex-col gap-3 p-5">
                <p className="text-lg">Today Deals</p>
                <h2 className="text-3xl font-bold">Deals of the Day</h2>
                <div className={homeTopDiscountClass}>
                    {topDiscountedProducts.map(item => (
                        <ProductCard key={item.id} {...item} className="flex gap-3 bg-custom-accent p-3 min-w-[500px]">
                            <div className="relative flex-1">
                                <ProductCard.Image className="max-h-[300px]" />
                                <ProductCard.DiscountBadge className="absolute top-1 left-1"/>
                                <ProductCard.Action className='absolute top-1 right-1'>
                                    <ProductCard.ToWishList />
                                    <ProductCard.ToDetail />
                                    <ProductCard.AddToCart />
                                    </ProductCard.Action>
                            </div>
                            <div className="flex flex-col flex-1 gap-3">
                                <ProductCard.Type />
                                <ProductCard.Name />
                                <ProductCard.Price />
                                <ProductCard.Rating />
                                <ProductCard.Detail />
                                <CtaLink linkTo='shop' className="self-start mt-1"/>
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
                    <img key={index} src={item} alt='products images from instagram' aria-label={`product photos from instagram`} className="h-[300px] min-w-[200px]"/>
                ))}
                </a>
            </div>

            <div className={testimonialContainerClass}>
                <p className="font-semibold col-span-full">Testimonial</p>
                <h2 className="text-3xl font-bold col-span-1">What Our Clients Say</h2>
                <div className="justify-self-end">
                    <Button className="bg-custom-orange">
                        <FaArrowLeft />
                    </Button>
                    <Button className="bg-custom-dark text-white ml-2">
                        <FaArrowRight />
                    </Button>
                </div>

                <div className="">

                </div>
            </div>

            <div className="text-center">
                <p>News & Blog</p>
                <h2 className="text-3xl font-bold">Our Latest News & Blogs</h2>
                <div className={blogsContainerClass}>
                    {blogs.map(blog => (
                        <BlogCard key={blog.id} {...blog}>
                            <BlogCard.Header />
                            <BlogCard.Body />
                        </BlogCard>
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