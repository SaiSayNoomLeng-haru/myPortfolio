import { useContext } from "react";
import CtaLink from "../CtaLink";
import { BlogCardContext } from "./BlogCard";

export default function BlogCardHeader(){
    const { displayImg , createdOn } = useContext(BlogCardContext)
    return(
        <div className="relative mx-auto">
                <img src={displayImg} alt="" className="h-[300px] object-cover"/>
                <p className="absolute bottom-0 right-0 p-2 bg-custom-orange font-semibold  drop-shadow-date-box">{createdOn}</p>
        </div>
    )
}