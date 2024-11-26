import classNames from "classnames"
import { Link } from "react-router-dom"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

export default function Footer(){
    const footerClass = classNames(
        'grid',
        'gap-5',
        'p-5',
        'bg-custom-dark',
        'text-gray-400',
        'md:grid-cols-6',
        'md:grid-rows-footer',
        'md:text-sm',
    );

    const iconLinks = classNames(
        'flex',
        'justify-around',
        'text-3xl',
        'md:row-start-3',
        'md:col-start-1',
        'md:col-end-3'
    );

    const footerLink = classNames(
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'mt-3',
        'md:items-start',
        'md:row-span-2'
    );

    const footerContact = classNames(
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'mt-3'
    )
    return(
        <footer className={footerClass}>
            <Link to='/' 
             className="md:col-start-1 md:col-end-3 md:row-end-2 md:place-self-center">
                <img src="/assets/images/logo.png" alt="Haru Clothing Logo Image" aria-label="Haru Clothing Logo Image" />
            </Link>

            <p className="md:col-start-1 md:row-start-2 md:col-end-3 md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Ducimus libero, ullam assumenda obcaecati, expedita asperiores ipsam repellendus unde, minima repellat quod laudantium delectus cupiditate? Nobis earum ad quam.</p>

            <div className={iconLinks}>
                <a href="https://www.facebook.com">
                    <FaFacebookSquare className="hover:text-white" />
                </a>

                <a href="https://www.instagram.com">
                    <FaInstagramSquare className="hover:text-white" />
                </a>

                <a href="https://www.twitter.com">
                    <FaTwitterSquare className="hover:text-white" />
                </a>

                <a href="https://www.linkedin.com">
                    <FaLinkedin className="hover:text-white" />
                </a>

                <a href="https://wwww.youtube.com">
                    <FaYoutubeSquare className="hover:text-white" />
                </a>
            </div>

            <div>
                <h2 className="text-white text-center text-xl font-semibold md:text-left">Company</h2>
                <div className={footerLink}>
                    <Link to='about-us' className= 'hover:text-white'>About Us</Link>
                    <Link to='blog' className= 'hover:text-white'>Blog</Link>
                    <Link to='contact-us' className= 'hover:text-white'>Contact Us</Link>
                    <Link to='career' className= 'hover:text-white'>Career</Link>
                </div>
            </div>

            <div>
                <h2 className="text-white text-center text-xl font-semibold md:text-left">Customer Services</h2>
                <div className={footerLink}>
                    <Link to='' className='hover:text-white'>My Account</Link>
                    <Link to='' className='hover:text-white'>Track Your Order</Link>
                    <Link to='' className='hover:text-white'>Return</Link>
                    <Link to='' className='hover:text-white'>FAQ</Link>
                </div>
            </div>

            <div>
                <h2 className="text-white text-center text-xl font-semibold md:text-left">Our Information</h2>
                <div className={footerLink}>
                    <Link to='' className='hover:text-white'>Privacy</Link>
                    <Link to='' className='hover:text-white'>User Terms & Condition</Link>
                    <Link to='' className='hover:text-white'>Return Policy</Link>
                </div>
            </div>

            <address >
                <h2 className="text-white text-center text-xl font-semibold md:text-left">Contact Info</h2>
                <div className={footerContact}>
                    <p >+1 123 456 789</p>
                    <p >example@gmail.com</p>
                    <p className="text-center">8502, Preston Rd. Inglewood, Maine, 98380</p>
                </div>
            </address>

            <div className="custom-divider md:hidden "></div>

            <p className="text-sm place-self-center md:place-self-end md:text-left md:row-start-4 md:col-span-full">Copyright&copy; {new Date().getFullYear()} Haru Clothing. All Rights Reserved.</p>
            

        </footer>
    )
}