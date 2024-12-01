import classNames from "classnames";
import { memo, useState } from "react";
import Button from "../Utilities Components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [ data, setData ] = useState({
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
                <h1 className="text-3xl font-semibold">Sign In</h1>
                <p>Please Fill your detail to access your account</p>

                <form action="" className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
                    <div className={inputBoxes}>
                        <label htmlFor="email" className="after:content-['*'] after:text-red-700">Email</label>
                        <input 
                            type="text"
                            id="email"
                            placeholder="Enter Email Address"
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
                            placeholder="Enter Password"
                            className={inputs}
                            onChange={handleChange}
                            value={data.password}
                            name="password"
                             />
                    </div>

                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="accent-custom-orange" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <div>
                            <p className="underline">Forgot Password?</p>
                        </div>
                    </div>

                    <Button className="bg-custom-dark text-white active:bg-custom-orange active:text-custom-green">Sign In</Button>

                    <div className="divider"></div>

                    <p>Don't have an account? 
                        <Link 
                        to='/sign-up'
                        className="underline text-custom-orange ml-3">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
            <div className="flex-1">
                <img src="/assets/images/haru04.jpg" alt="" />
            </div>
        </section>
    )
}

export default memo(SignIn);