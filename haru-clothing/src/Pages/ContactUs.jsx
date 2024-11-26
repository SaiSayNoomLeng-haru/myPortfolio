import { memo, useState } from "react"
import PageTitle from "../Utilities Components/PageTitle";
import classNames from "classnames";
import Button from "../Utilities Components/Button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import Banner from "../Utilities Components/Banner";

const ContactUs = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevData => (
            {
                ...prevData,
                [ name ] : value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    // classes
    const inputBoxes = classNames(
        'flex flex-col my-3'
    )

    const input = classNames(
        'bg-transparent outline-none border border-custom-dark focus:border-custom-orange rounded-sm py-1 focus:border-2 indent-3'
    )

    const label = classNames(
        'text-lg font-semibold after:content-["*"] after:text-custom-orange'
    )
    return(
        <section className="space-y-3 my-5">
            <PageTitle destination='contact us'/>

            <div className="grid md:grid-cols-2 max-w-[80%] mx-auto p-3 gap-3">
                <form action="" className="grid md:grid-cols-2 gap-2" onSubmit={handleSubmit}>
                    <h2 className="font-semibold md:col-span-2">Get in Touch</h2>
                    <p className="md:col-span-2">Your email address will not be published. Required fields are marked*</p>

                    <div className={`${inputBoxes} `}>
                        <label htmlFor="name" className={label}>Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            value={user.name}
                            name="name"
                            onChange={handleChange}
                            className={input}
                            autoComplete="off"/>
                    </div>

                    <div className={`${inputBoxes} `}>
                        <label htmlFor="email" className={label}>Email</label>
                        <input 
                            type="text" 
                            id="email"
                            value={user.email}
                            name="email"
                            onChange={handleChange}
                            className={input}
                            autoComplete="off"/>
                    </div>

                    <div className={`${inputBoxes} md:col-span-2`}>
                        <label htmlFor="subject" className={label}>Subject</label>
                        <input 
                            type="text" 
                            id="subject"
                            value={user.subject}
                            name="subject"
                            onChange={handleChange}
                            className={input}
                            autoComplete="off"/>
                    </div>
                    
                    <div className={`${inputBoxes} md:col-span-2`}>
                        <label htmlFor="message" className={label}>Your Message</label>
                        <textarea 
                            name="message" 
                            id="message"
                            value={user.message}
                            onChange={handleChange}
                            className={`${input}`}
                            ></textarea>
                    </div>

                    <Button className="bg-custom-dark text-white ">Send Message</Button>
                </form>

                <div className="flex flex-col gap-5 justify-between bg-slate-100 px-5 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Address</h2>
                        <p className="text-slate-500">4517 Washionton Ave, Manchester, Kentucky 39495</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p className="text-slate-500">Phone : + 1 123 456 789</p>
                        <p className="text-slate-500">Email : example@gmail.com</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Business Hours</h2>
                        <p className="text-slate-500">Monday - Friday : 10:00 - 20:00</p>
                        <p className="text-slate-500">Saturday - Sunday : 10:00 - 18:00</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Stay Connected</h2>
                        <div className="flex justify-between items-center text-xl">
                            <a href="https://www.facebook.com" >
                                <FaFacebook/>
                            </a>

                            <a href="https://www.instagram.com" >
                                <FaInstagram/>
                            </a>

                            <a href="https://www.youtube.com" >
                                <FaYoutube/>
                            </a>

                            <a href="https://www.twitter.com" >
                                <FaTwitter />
                            </a>

                            <a href="https://www.linkedin.com" >
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>

               
            </div>
            <Banner className="max-w-[80%] mx-auto" />
        </section>
    )
}

export default memo(ContactUs);