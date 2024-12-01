import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from 'react-icons/bs';
import { TiHeart } from 'react-icons/ti';
import { TiUserOutline } from "react-icons/ti";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5'
import { AppContext } from "../App";

export default function Header(){
    const [ navOpen, setNavOpen ] = useState(false);
    const { cart, favorite } = useContext(AppContext);
    const cartArr = Object.values(cart).map(value => value);
    const favArr = Object.values(favorite).map(v => v);

    const cartCount = cartArr.reduce((acc, value) => (
        acc + value.quantity
    ), 0)
    
    const favCount = favArr.filter(fav => fav.favorited).reduce((acc, value) => (
        acc + value.favorited
    ), 0)

    const handleNav = () => {
        setNavOpen(prevOpen => !prevOpen);
    }

    // classes
    const headerClass = classNames(
        'flex py-5 px-10 justify-between items-center gap-4 font-poppins'
    );

    const mainNavClass = classNames(
        'flex max-35:flex-col gap-3 md:gap-5 max-35:fixed max-35:bg-custom-dark max-35:text-white max-35:inset-y-0 max-35:left-[20%] max-35:right-0 max-35:p-10 max-35:z-10',
        {
            'max-35:translate-x-0': navOpen,
            'max-35:translate-x-full' : !navOpen
        },
        'transition',
        'duration-500',
        'ease-in-out'
    );

    const activeNavLink = classNames(
        'underline underline-offset-2 font-semibold'
    );

    const navToggle = classNames(
        'md:hidden max-35:block max-35:z-20 max-35:top-4 max-35:right-4 text-3xl max-35:order-last'
        ,
        {
            'max-35:text-white' : navOpen,
            'max-35:text-black' : !navOpen,
            'max-35:rotate-180' : navOpen,
            'max-35:fixed': navOpen
        },
        'transition duration-500 ease-in-out'
    )

    const navIconLinks = classNames(
        'flex items-center gap-2 md:gap-5 text-3xl'
    )

    return(
        <header className={headerClass}>
            <Link to='/'>
                <img src="/assets/images/logo.png" alt="Haru Clothing Logo" aria-label="Haru Clothing Logo" loading="lazy" className="max-w-[4rem]"/>
            </Link>

            <button 
                className={navToggle}
                onClick={handleNav}
                aria-expanded={navOpen}
                aria-label="Toggle Navigation Menu"
            >
                {navOpen ? 
                    (<IoCloseSharp />) :
                    (<GiHamburgerMenu />) 
                }
            </button>

            <nav className={mainNavClass} role="navigation">
                <NavLink 
                 to='/' 
                 end
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    Home
                </NavLink>

                <NavLink 
                 to='products' 
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    Shop
                </NavLink>

                <NavLink 
                 to='about-us' 
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    About Us
                </NavLink>

                <NavLink 
                 to='contact-us' 
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    Contact Us
                </NavLink>

                <NavLink 
                 to='blogs' 
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    Blog
                </NavLink>

                <NavLink 
                 to='faq' 
                 className={({isActive}) => isActive ? activeNavLink : ''}
                 onClick={handleNav}>
                    FAQ
                </NavLink>
            </nav>

            <div className={navIconLinks}>
               <Link to='wishlist' className="relative">
                    <TiHeart />
                    {favCount > 0 ? (
                       <div className="absolute w-[25px] h-[25px] bg-red-800 rounded-full text-white top-[-.5rem] right-[-.5rem] z-10">
                            <p className="absolute z-20 text-[.8rem] font-bold top-[-.3rem] left-[.6rem]">{favCount}</p>
                       </div>
                    ): null}
               </Link>

                <Link to='cart' className="relative">
                    <BsCart2 />
                    {cartCount > 0 ? (
                       <div className="absolute w-[25px] h-[25px] bg-red-800 rounded-full text-white top-[-.5rem] right-[-.5rem] z-10">
                            <p className="absolute z-20 text-[.8rem] font-bold top-[-.3rem] left-[.6rem]">{cartCount}</p>
                       </div>
                    ): null}
                   
                </Link>

               <Link to='sign-in'>
                    <TiUserOutline />
               </Link>
            </div>
        </header>
    )
}