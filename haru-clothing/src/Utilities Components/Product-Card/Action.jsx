import classNames from "classnames"

export default function Action({children, className = ''}){
    const cardActionClass = classNames(
        'flex flex-col gap-2',
        className
    )
    return(
        <div className={cardActionClass}>
            {children}
        </div>
    )
}