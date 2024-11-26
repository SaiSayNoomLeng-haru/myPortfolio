import { useOutletContext } from "react-router-dom"
import Dropdown from "../Utilities Components/Dropdown/DropdownIndex";

export default function Order(){
    const { order } = useOutletContext();
    return(
       <>
            {
                order.map(faq => (
                    <Dropdown key={faq.id}>
                        <Dropdown.Content {...faq}/>
                    </Dropdown>
                ))
            }
       </>
    )
}