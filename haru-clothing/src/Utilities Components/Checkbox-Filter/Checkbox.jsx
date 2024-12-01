import classNames from "classnames"

export default function Checkbox({className = '', handleFilter, item, filterType, checked}){
    const checkboxClass = classNames(
        'flex gap-2', className
    )
    return(
        <div className={checkboxClass}>
            <input 
             type="checkbox"
             className="accent-custom-orange"
             id={`${filterType}-${item}`} 
             onChange={() => handleFilter(filterType, item)}
             checked={checked}/>
             <label htmlFor={`${filterType}-${item}`}>{item.charAt(0).toUpperCase()}{item.slice(1)}</label>
        </div>
    )
}