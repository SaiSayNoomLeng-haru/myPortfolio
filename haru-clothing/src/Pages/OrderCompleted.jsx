
import classNames from "classnames";
import PageTitle from "../Utilities Components/PageTitle";
import { FaCheck } from "react-icons/fa";
import Banner from "../Utilities Components/Banner";
import Button from "../Utilities Components/Button";
import { useNavigate } from "react-router-dom";

export default function OrderCompleted(){
    const cartItems = localStorage.getItem('cart-items');
    const cartArr = cartItems ?  Object.values(JSON.parse(cartItems)).map(v => v) : [];
    const navigate = useNavigate();

    const totalPrice = cartArr.reduce((acc, value) => (
        acc + ((value.price - (value.price * (value.discount / 100))) * value.quantity)
    ), 0) 

    const TAX_RATE = totalPrice * 0.12;

    const overallTotal = (totalPrice + TAX_RATE).toFixed(2)
    
    const getRandomId = () => {
        return Math.floor(Math.random() * 999999999)
    }

    const handleCompleted = () => {
        localStorage.removeItem('cart-items');
        navigate('/')
    }

   
    return(
        <section>
            <PageTitle destination='Order Completed'/>

            <div className="p-10 flex flex-col gap-5 justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-custom-orange grid place-items-center">
                    <FaCheck  className="text-3xl"/>
                </div>
                <h2 className="text-3xl font-bold">Your Order is Completed!</h2>
                <p className="text-slate-600">Thank You! Your Order has been received.</p>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 place-items-center bg-custom-orange p-5 custom-container mx-10">
                <div>
                    <p className="text-gray-700">Order ID</p>
                    <p className="font-bold">
                        {getRandomId()}
                    </p>
                </div>

                <div>
                    <p className="text-gray-700">Payment Method</p>
                    <p className="font-bold">MasterCard</p>
                </div>

                <div>
                    <p className="text-gray-700">Transaction ID</p>
                    <p className="font-bold">
                        {getRandomId()}
                    </p>
                </div>

                <div>
                    <p className="text-gray-700">Estimated Delivery</p>
                    <p className="font-bold">
                        {new Date(new Date().setDate(new Date().getDate() + 10)).toDateString("en-US")}
                    </p>
                </div>
            </div>

            <div className="border grid custom-container p-5 mx-10 ">
                <h3 className="font-semibold text-lg">Order Detail</h3>

                <div className="grid gap-3 divide-y-2">
                    <div className="flex justify-between p-3">
                        <p className="font-semibold">Products</p>
                        <p className="font-semibold">Sub Total</p>
                    </div>

                    <div>
                    {
                        cartArr.map(item => (
                            <div key={item.id} className="flex justify-between p-3">
                                <div className="flex gap-2">
                                    <img 
                                        src={item.imageUrl[0]} 
                                        className="w-[100px]" />
                                    <div>
                                        <p className="font-semibold text-sm">{item.name}</p>
                                        <p className="text-slate-500">Quantity:&nbsp;
                                            {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <p>${((item.price - (item.price * item.discount / 100)) * item.quantity).toFixed(2)}</p>
                            </div>
                        ))
                    }
                    </div>

                    <div>
                        <div className="flex justify-between p-3">
                            <p className="font-semibold">Shipping</p>
                            <p>$0.00</p>
                        </div>

                        <div className="flex justify-between p-3">
                        <p className="font-semibold">Tax</p>
                        <p>${TAX_RATE.toFixed(2)}</p>
                        </div>
                    </div>

                    

                    <div className="flex justify-between p-3">
                        <p className="font-semibold">Total</p>
                        <p>${overallTotal}</p>
                    </div>

                    
                </div>
                
                <Button className="bg-custom-orange my-2" onClick={handleCompleted}>
                        Back to shopping!
                </Button>
            </div>

            <Banner className="custom-container !my-10"/>
        </section>

    )
}

