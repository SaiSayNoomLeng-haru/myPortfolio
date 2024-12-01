import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogCardContext } from "./BlogCard";

export default function BlogCardBody(){
    const { title, displayContent } = useContext(BlogCardContext)
    return(
        <div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p>{displayContent}</p>
        <p className="underline">Read More</p>
    </div>
    )
}