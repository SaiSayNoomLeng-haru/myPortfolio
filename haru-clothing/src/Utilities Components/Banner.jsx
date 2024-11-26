import classNames from "classnames";
import { GoPackage } from 'react-icons/go';
import { RiSecurePaymentLine, RiCustomerService2Fill } from 'react-icons/ri';

export default function Banner({className = ''}){
    const bannerClass = classNames(
        'grid gap-2 place-content-center md:grid-cols-3',
        className
    );
    return(
        <div className={bannerClass}>
            <div className="flex gap-2">
                <GoPackage className="text-[2rem] md:text-[4rem]" />
               <div>
                    <h2 className="font-semibold">Free Shipping</h2>
                    <p className="text-slate-700 text-sm">Free shipping for order above $180</p>
               </div>
            </div>

            <div className="flex gap-2">
                <RiSecurePaymentLine className="text-[2rem] md:text-[4rem]" />
               <div>
                    <h2 className="font-semibold">Secure Payment</h2>
                    <p className="text-slate-700 text-sm">We secure our payment system.</p>
               </div>
            </div>

            <div className="flex gap-2">
                <RiCustomerService2Fill className="text-[2rem] md:text-[4rem]" />
               <div>
                    <h2 className="font-semibold">24x7 Support</h2>
                    <p className="text-slate-700 text-sm">We support online all days, 7 days a week.</p>
               </div>
            </div>
        </div>
    )
}