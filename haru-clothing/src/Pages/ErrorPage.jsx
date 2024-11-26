import classNames from "classnames";
import { memo } from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {

    const errorPage = classNames(
        'grid  place-items-center custom-container  text-center gap-5'
    )   
    return(
       <section className={errorPage}>
            <div className="text-background min-h-[300px] flex justify-center items-center">
                <p>404</p>
            </div>
            <div>
                <p>Opps! Page Not Found</p>
                <p>The page you are looking for cannot be accessed.</p>
                <p>Take a break before trying again.</p>
            </div>
            <Link to='/' className='bg-custom-dark text-white px-3 py-2'>Go To Home Page</Link>
       </section>
    )
}

export default memo(ErrorPage);