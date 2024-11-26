import classNames from "classnames"
import CtaLink from "./CtaLink"

export default function Hero({title, content, link, imgUrl, badge, className = ''}){

    const heroClass = classNames(
        'grid md:grid-cols-2 gap-2 place-items-center p-5 bg-custom-accent justify-start', className
    )
    return(
        <div className={heroClass}>
        
            <div>
                <img src={imgUrl} alt='page hero image' loading="lazy" aria-label="page hero image" className="max-w-[80%] mx-auto" />
            </div>

            <div className="flex flex-col gap-4 items-start">
                <p className="inline-block bg-white rounded-lg px-3">{badge}</p>
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-custom-dark">{content}</p>
                <CtaLink linkTo={link}/>
            </div>
        </div>
    )
}