import classNames from "classnames"

export default function Checkbox({className = '', handleFilter, item, filterType}){
    const checkboxClass = classNames(
        'flex gap-2', className
    )
    return(
        <div className={checkboxClass}>
            <input 
             type="checkbox"
             id={`${filterType}-${item}`} 
             onChange={() => handleFilter(filterType, item)}/>
             <label htmlFor={`${filterType}-${item}`}>{item.charAt(0).toUpperCase()}{item.slice(1)}</label>
        </div>
    )
}