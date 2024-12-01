import classNames from "classnames";
import { memo, useState } from "react";
import Button from "../Utilities Components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [ data, setData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value }  = e.target;
        setData(prevData => (
            {
                ...prevData,
                [ name ] : value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    // classes
    const signInPage = classNames(
        'flex custom-container flex-col md:flex-row md:px-10'
    )

    const inputBoxes = classNames(
        'flex flex-col'
    )

    const inputs = classNames(
        'border indent-2 py-2 outline-none focus:border-custom-green'
    )

    return(
        <section className={signInPage}>
            <div className="flex flex-col p-3 gap-3 flex-1">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <p>Please Fill your detail to create your account</p>

                <form action="" className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
                    <div className={inputBoxes}>
                        <label htmlFor="firstName" className="after:content-['*'] after:text-red-700">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            placeholder="Enter Your First Name"
                            className={inputs}
                            onChange={handleChange}
                            value={data.firstName}
                            name="firstName"
                            autoComplete="off"
                             />
                    </div>

                    <div className={inputBoxes}>
                        <label htmlFor="lastName" className="after:content-['*'] after:text-red-700">LastName</label>
                        <input 
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            className={inputs}
                            onChange={handleChange}
                            value={data.lastName}
                            name="lastName"
                            autoComplete="off"
                             />
                    </div>

                    <div className={inputBoxes}>
                        <label htmlFor="email" className="after:content-['*'] after:text-red-700">Email</label>
                        <input 
                            type="text"
                            id="email"
                            placeholder="Enter Your Email Address"
                            className={inputs}
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            autoComplete="off"
                             />
                    </div>

                    <div className={inputBoxes}>
                        <label htmlFor="password" className="after:content-['*'] after:text-red-700">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            className={inputs}
                            onChange={handleChange}
                            value={data.password}
                            name="password"
                            autoComplete="off"
                             />
                    </div>

                    <div className="flex items-center gap-2">
                            <input type="checkbox" id="agree" className="accent-custom-orange" />
                            <label htmlFor="agree">Agree with <Link className="underline">Terms & Condition</Link> and <Link className="underline">Privacy Policy</Link></label>
                    </div>
                    
                    <Button className="bg-custom-dark text-white active:bg-custom-orange active:text-custom-green">Sign Up</Button>

                    <div className="divider"></div>

                    <p>Already have an account? 
                        <Link 
                        to='/sign-in'
                        className="underline text-custom-orange ml-3">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
            <div className="flex-1">
                <img src="/assets/images/haru01.jpg" alt="" />
            </div>
        </section>
    )
}

export default memo(SignUp);