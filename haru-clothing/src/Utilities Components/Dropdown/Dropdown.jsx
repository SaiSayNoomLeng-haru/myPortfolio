import { createContext } from "react";
import { useState } from "react";

const DropdownContext = createContext();

export default function Dropdown({children}){
    const [ expanded, setExpanded ] = useState(false);
    
    const handleExpanded = () => {
        setExpanded(prevState => !prevState )
    }

    return(
        <DropdownContext.Provider value={{expanded, handleExpanded}}>
            <div>{children}</div>
        </DropdownContext.Provider>
    )
}

export {DropdownContext}