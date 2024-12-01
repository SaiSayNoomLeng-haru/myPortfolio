import classNames from "classnames"
import { FaExpandArrowsAlt } from "react-icons/fa"

export default function ToDetail({className = ''}){
    const toDetailClass = classNames(
       'cursor-pointer active:bg-custom-orange',
        className
    )
    return(
        <span className={toDetailClass}>
            <FaExpandArrowsAlt />
        </span>
    )
}