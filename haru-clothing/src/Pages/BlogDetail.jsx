import { memo } from "react"
import { getBlogDetail } from "../Api";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../Utilities Components/PageTitle";
import Banner from "../Utilities Components/Banner";

export async function loader({params}){
    const loadBlogDetail = await getBlogDetail(params.id);
    const blogs = loadBlogDetail.blogs;
    return {blogs};
}

const BlogDetail = () => {
    const {blogs} = useLoaderData();
    const { author, content, createdOn, imgUrl, title } = blogs;
    return(
        <section className="custom-container">
            <PageTitle destination='Blog Details' />

            <div className="grid md:grid-cols-2 gap-10 custom-container">
                <img src={imgUrl[0]} alt={`${author}'s photo`} aria-label={`${author}'s photot`}  loading="lazy" className="max-w-[80%] mx-auto"/>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <p className="bg-custom-orange text-white self-start px-4 py-2 rounded-lg">Women</p>
                        <p className="bg-custom-orange text-white self-start px-4 py-2 rounded-lg">Fahshion</p>
                        <p className="bg-custom-orange text-white self-start px-4 py-2 rounded-lg">Style</p>
                    </div>

                   <p className="text-3xl font-bold">{title}</p>
                   <p className="font-semibold">Written by <span className="text-custom-orange">{author}</span></p>
                   <p><span className="font-semibold">{createdOn}</span> | 10 min read</p>
                   <p className="first-letter:font-bold first-letter:bg-custom-orange first-letter:float-left first-letter:text-7xl first-letter:mr-4 first-letter:p-3 text-justify">{content}</p>
                </div>

                <div className="col-span-full flex gap-2 flex-col md:flex-row">

                    <div className="space-y-5 text-justify p-5">
                        <p className="text-lg font-semibold">Fashion Trends Through the Year</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat architecto laudantium harum. Blanditiis non fugiat consequuntur itaque minima possimus ipsum nulla et necessitatibus recusandae, similique aliquid eius quae cum sequi. Similique, aperiam nulla perferendis nisi ratione aliquam magnam dignissimos alias necessitatibus voluptate asperiores doloribus, unde velit ex, ullam quidem?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus esse pariatur ipsam in est magnam, explicabo ea temporibus dignissimos hic excepturi dolor ipsa id molestias libero consequatur vel distinctio nostrum voluptas ipsum laborum, praesentium iusto? Inventore, pariatur commodi! Facere incidunt corporis praesentium quisquam ut minima doloribus atque quos unde dolore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus quas maiores aliquam quis voluptate laborum labore, assumenda hic numquam dolor? Ex, debitis. Deleniti dicta, assumenda eaque voluptatibus distinctio voluptas, expedita nisi ex asperiores consectetur architecto repellat labore, provident fugit facilis! Praesentium explicabo iste, deleniti eos velit labore modi sit?</p>
                        <div className="bg-custom-orange flex p-2 gap-10 rounded-lg items-center justify-center">
                            <img src={imgUrl[imgUrl.length -1]} alt={`${author}photo`}  aria-label={`${author}'s photo`} loading="lazy" className="w-[70px] aspect-square rounded-full"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, nam!</p>
                        </div>
                    </div>
                    

                    <div >
                        <img src={imgUrl[1]} alt={`${author}'s photo`} aria-label={`${author}'s photot`}  loading="lazy" className="max-w-[80%] min-w-[300px]"/>

                    </div>
                </div>

                <div className="col-span-full">
                    <p className="font-bold">Decoding the Latest Fashion Show</p>
                    <ul className='list-disc'>
                        <li className="ml-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, alias?</li>
                        <li className="ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, unde?</li>
                        <li className="ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod eveniet quidem itaque dicta.</li>
                        <li className="ml-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    </ul>
                </div>

                <div className="col-span-full flex gap-2 flex-col md:flex-row">
                    <div >
                        <img src={imgUrl[imgUrl.length - 1]} alt={`${author}'s photo`} aria-label={`${author}'s photot`}  loading="lazy" className="max-w-[80%] min-w-[300px]"/>
                    </div>

                    <div className="space-y-5 text-justify p-5">
                        <p className="text-lg font-semibold">Crafting Your Own Fashion</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat architecto laudantium harum. Blanditiis non fugiat consequuntur itaque minima possimus ipsum nulla et necessitatibus recusandae, similique aliquid eius quae cum sequi. Similique, aperiam nulla perferendis nisi ratione aliquam magnam dignissimos alias necessitatibus voluptate asperiores doloribus, unde velit ex, ullam quidem?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus esse pariatur ipsam in est magnam, explicabo ea temporibus dignissimos hic excepturi dolor ipsa id molestias libero consequatur vel distinctio nostrum voluptas ipsum laborum, praesentium iusto? Inventore, pariatur commodi! Facere incidunt corporis praesentium quisquam ut minima doloribus atque quos unde dolore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus quas maiores aliquam quis voluptate laborum labore, assumenda hic numquam dolor? Ex, debitis. Deleniti dicta, assumenda eaque voluptatibus distinctio voluptas, expedita nisi ex asperiores consectetur architecto repellat labore, provident fugit facilis! Praesentium explicabo iste, deleniti eos velit labore modi sit?</p> 
                        <div className="bg-custom-orange flex p-2 gap-10 rounded-lg items-center justify-center">
                            <img src={imgUrl[1]} alt={`${author}photo`}  aria-label={`${author}'s photo`} loading="lazy" className="w-[70px] aspect-square rounded-full"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, nam!</p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Banner className='custom-container' />
        </section>
    )
}

export default memo(BlogDetail);