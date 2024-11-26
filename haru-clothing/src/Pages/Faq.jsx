import { memo } from "react"
import PageTitle from "../Utilities Components/PageTitle";
import classNames from "classnames";
import { getFaqs } from "../Api";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
    const loadFaqs = await getFaqs();

    const payment = loadFaqs.filter(faq => faq.type === 'payment')
    const order = loadFaqs.filter(faq => faq.type === 'order');
    const customerSupport = loadFaqs.filter(faq => faq.type === 'customer support');
    const returnOrders = loadFaqs.filter(faq => faq.type === 'return');
    const account = loadFaqs.filter(faq => faq.type === 'account');

    return { payment, order, customerSupport, returnOrders, account};
}

const Faq = () => {
    const { payment, order, customerSupport, returnOrders, account } = useLoaderData();
   

    // classes
    const faqClass = classNames(
        'custom-container'
    )

    const activeStyle = {
        backgroundColor : '#f2b263',
        fontWeight: 'bold'
    }

    const faqNavLinks = classNames(
        'hover:bg-custom-orange px-2 py-3 border'
    )
    return(
        <section className={faqClass}>
            <PageTitle destination='FAQs' />
            <div className="grid md:grid-cols-2 custom-container">
                <nav className="flex flex-col gap-2 p-10 md:p-20">
                    <NavLink
                        to='.'  
                        end
                        className={faqNavLinks}
                        style={({isActive}) => isActive ? activeStyle: null}>Order & Shipping</NavLink>
                    <NavLink
                        to='return-order'  
                        className={faqNavLinks}
                        style={({isActive}) => isActive ? activeStyle: null}>Returns & Exchanges</NavLink>
                    <NavLink  
                        to='payment'
                        className={faqNavLinks}
                        style={({isActive}) => isActive ? activeStyle: null}>Payments & Discounts</NavLink>
                    <NavLink  
                        to='account'
                        className={faqNavLinks}
                        style={({isActive}) => isActive ? activeStyle: null}>Account & Profile</NavLink>
                </nav>

                <div className="flex flex-col gap-1 py-10 md:py-20">
                    <Outlet context={ {payment, order, customerSupport, returnOrders, account} } />
                </div>
            </div>
            
        </section>
    )
}

export default memo(Faq);