import classNames from "classnames";

export default function Button({children, className = '', ...props}){
    const buttonClass = classNames(
        'inline-block py-3 px-5 font-semibold',
        className
    )
    return(
        <button className={buttonClass} {...props}>{children}</button>
    )
}