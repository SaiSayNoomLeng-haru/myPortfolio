import { useContext } from "react"
import { DropdownContext } from "./Dropdown"
import { FaPlus, FaMinus } from "react-icons/fa";
import classNames from "classnames";


export default function Content({question, answer}){
    const { expanded, handleExpanded} = useContext(DropdownContext);

    const dropdownClass = classNames(
        'flex flex-col border p-3 cursor-pointer',
        {
            'bg-custom-dark text-white' : expanded
        }
    )
    return(
        <div className={dropdownClass}  onClick={handleExpanded}>
            <div className="flex justify-between items-center">
                <p>{question}</p>
                {
                    expanded ? 
                        <FaMinus />:
                        <FaPlus />
                }
            </div>

            <div>
                {
                    expanded ? (<p className="font-semibold mt-2 text-custom-orange">{answer}</p>) : ''
                }
            </div>
        </div>
    )
}