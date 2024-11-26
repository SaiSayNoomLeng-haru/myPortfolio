import { useState } from "react";
import classNames from "classnames";
import Button from "./Button";

export default function SubscribeEmail(){
    const [ subEmail, setSubEmail ] = useState({
        email: ''
    })

    const newsLetterClass = classNames(
        'bg-white text-center p-3 flex flex-col gap-2 md:container'
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubEmail(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subEmail)
    }
    return(
        <form action="" className="flex flex-col md:flex-row gap-5" onSubmit={handleSubmit}>
            <input 
            type="text"
            className="border py-3 indent-5 outline-none focus:border-custom-dark focus:border-2 w-full"
            placeholder="Email Address"
            autoComplete="off"
            onChange={handleChange}
            value={subEmail.email} 
            name='email'/>

            <Button className="bg-custom-dark text-white">Subscribe</Button>
        </form>
    )
}