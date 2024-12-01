import { memo } from "react"
import { getBlogs } from "../Api";
import { useLoaderData, Link } from "react-router-dom";
import BlogCard from "../Utilities Components/Blog-Card/BlogCardIndex";
import classNames from "classnames";
import PageTitle from "../Utilities Components/PageTitle";

export async function loader(){
    const loadBlogs = await getBlogs();
    console.log(loadBlogs)
    const blogPosts = loadBlogs.blogs

    return { blogPosts };
}

const Blog = () => {
    const { blogPosts } = useLoaderData();

    const blogSection = classNames(
        'space-y-5 custom-container' 
    )
    return(
        <section className={blogSection}>
            <PageTitle destination='blogs' className='col-span-full' />
            <div className="md:col-span-full flex flex-col md:flex-row gap-2">
            {
                blogPosts.map(post => (
                    <Link to={post.id}  key={post.id} >
                            <BlogCard {...post} className="border-none bg-custom-accent">
                                <BlogCard.Header />
                                <BlogCard.Body />
                            </BlogCard>
                        </Link>
                ))
            }

            </div>
            
        </section>
    )
}

export default memo(Blog);