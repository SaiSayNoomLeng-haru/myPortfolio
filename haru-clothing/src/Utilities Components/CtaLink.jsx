import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function CtaLink({linkTo, className = '',}){
    const ctaClass = classNames(
        'inline-block bg-custom-dark text-white px-5 py-3',
        className
    )
    return(
        <Link 
        className={ctaClass}
        to={linkTo}>
            Shop Now
            <FaArrowRight className="inline"/>
        </Link>
    )
}