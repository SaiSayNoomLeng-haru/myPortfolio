import { useOutletContext } from "react-router-dom"
import Dropdown from "../Utilities Components/Dropdown/DropdownIndex";

export default function Return(){
    const { returnOrders } = useOutletContext();
    return(
        <>
            {
                returnOrders.map(faq => (
                    <Dropdown key={faq.id}>
                        <Dropdown.Content {...faq} />
                    </Dropdown>
                ))
            }
        </>
    )
}