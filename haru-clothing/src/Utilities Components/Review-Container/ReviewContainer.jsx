import classNames from "classnames"

export default function ReviewContainer({children, className = '', ...props}){
    const reviewContainerClass = classNames(
        'bg-slate-100 p-20 custom-container flex gap-5 flex-col md:flex-row', className
    )
    return(
        <div className={reviewContainerClass} {...props}>
            {children}
        </div>
    )
}