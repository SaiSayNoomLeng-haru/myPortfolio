import { useOutletContext } from "react-router-dom"
import Dropdown from "../Utilities Components/Dropdown/DropdownIndex";

export default function Account(){
    const { account } = useOutletContext();
    return(
        <>
            {
                account.map(faq => (
                    <Dropdown key={faq.id}>
                        <Dropdown.Content {...faq} />
                    </Dropdown>
                ))
            }
        </>
    )
}