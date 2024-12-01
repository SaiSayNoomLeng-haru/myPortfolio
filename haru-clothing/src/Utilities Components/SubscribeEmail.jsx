import { useState } from "react";
import classNames from "classnames";
import Button from "./Button";

export default function SubscribeEmail(){
    const [ subEmail, setSubEmail ] = useState({
        email: ''
    })
    const [ isValid, setIsValid ] = useState(true)

    const reg_Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubEmail(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
        setIsValid(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email } = subEmail;
    
        if(!reg_Email.test(email)){
            setIsValid(false)
            return;
        }

        console.log(subEmail)
        setSubEmail({email : ''})
    }

    const subEmailInput = classNames(
        'border py-3 indent-5 outline-none focus:border-custom-dark focus:border-2 w-full',
        {
            'border-red-700' : !isValid
        }
    )

    return(
        <form action="" className="flex flex-col md:flex-row gap-5 relative" onSubmit={handleSubmit}>
            <input 
            type="text"
            className={subEmailInput}
            placeholder="Email Address"
            autoComplete="off"
            onChange={handleChange}
            value={subEmail.email} 
            name='email'/>

            {!isValid && <p className="text-red-600 italic text-sm absolute bottom-[-1.5rem] left-[1rem]">Must be a valid Email Address.</p>}

            <Button className="bg-custom-dark text-white">Subscribe</Button>
        </form>
    )
}