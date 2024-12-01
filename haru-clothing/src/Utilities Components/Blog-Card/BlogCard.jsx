import classNames from "classnames";
import { createContext } from "react"

const BlogCardContext = createContext();

export default function BlogCard({children, content, imgUrl, author, title, createdOn,  className = '',...props}){
    const displayImg = imgUrl[0];
    const displayContent = content[content.length -1]

    const blogCardClass = classNames(
        'flex min-w-[250px] flex-col gap-2 items-start text-left border border-custom-orange rounded-lg p-5 h-[550px]', className
    )
    return(
        <BlogCardContext.Provider value={{content, imgUrl, author, title, createdOn, displayImg,displayContent}}>
            <div className={blogCardClass}>
                {children}
            </div>
        </BlogCardContext.Provider>
        
    )
}

export { BlogCardContext }