import classNames from "classnames"
import { FaExpandArrowsAlt } from "react-icons/fa"

export default function ToDetail({className = ''}){
    const toDetailClass = classNames(
        'p-3',
        'bg-white',
        'rounded-full',
        className
    )
    return(
        <span className={toDetailClass}>
            <FaExpandArrowsAlt />
        </span>
    )
}