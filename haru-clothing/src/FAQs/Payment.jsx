import { useOutletContext } from "react-router-dom"
import Dropdown from "../Utilities Components/Dropdown/DropdownIndex";

export default function Payment(){
    const { payment } = useOutletContext();

    return(
      <>
        {payment.map(faq => (
            <Dropdown key={faq.id}>
                <Dropdown.Content {...faq} />
            </Dropdown>
        ))}
      </>
    )
}