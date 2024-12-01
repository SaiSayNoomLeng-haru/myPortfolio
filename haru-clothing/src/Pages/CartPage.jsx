import { memo, useMemo, useContext } from "react"
import { AppContext } from "../App.jsx";
import CartProduct from "../Utilities Components/Cart-item/CartProduct.jsx";
import CartPrice from "../Utilities Components/Cart-item/CartPrice.jsx";
import CartQuantity from "../Utilities Components/Cart-item/CartQuantity.jsx";
import CartTotal from "../Utilities Components/Cart-item/CartTotal.jsx";
import Button from "../Utilities Components/Button.jsx";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";



const CartPage = () => {
    const { cart, addQuantity, reduceQuantity, deleteProduct, setCart } = useContext(AppContext);
    const cartArr = useMemo(() => (Object.values(cart).map(value => value)),[cart])

    const disabledBtn = cartArr.length === 0;
    const navigate = useNavigate();

    const handleConfirm = () => {
        try {
            localStorage.setItem('cart-items', JSON.stringify(cart));
            setCart({});
            navigate('/order-completed');
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    };

    const cartTotal = cartArr.reduce((acc, value) => (
        acc + ((value.price - (value.price * value.discount / 100)) * value.quantity)
    ), 0)

    const totalCart = (type) => {
        return cartArr.reduce((acc, value) => {
            return acc + value[type];
        }, 0)
    }

    const TAX_RATE = cartTotal * 0.12;
    const total = cartTotal + TAX_RATE;

    // classes
    const confirmBtn = classNames(
        'bg-custom-orange active:bg-custom-green text-white active:text-black rounded-lg place-self-end col-span-full ',
        {
            '!bg-gray-400 cursor-not-allowed' : disabledBtn
        }
    )
    
return(
    <section className="grid grid-cols-cart custom-container gap-10 max-35:grid-cols-1 items-start relative">
    
        <div className="grid">
            <div className="grid grid-cols-cart-item capitalize bg-custom-orange py-2  font-semibold rounded-sm text-center max-35:grid-cols-2">
                <p>product</p>
                <p>price</p>
                <p>quantity</p>
                <p>subtotal</p>
            </div>
                {
                    cartArr.map(item => (
                        <div key={item.id} className="grid grid-cols-cart-item py-5 text-center max-35:grid-cols-2 place-items-center max-35:gap-5">
                            <CartProduct {...item}
                                deleteProduct={deleteProduct}
                            />
                            <CartPrice {...item} />
                            <CartQuantity {...item}
                            addQuantity={addQuantity}
                            reduceQuantity={reduceQuantity}
                            />
                            <CartTotal {...item} />
                        </div>
                    ))
                }
            
          </div>
          <div className="border p-3 rounded-sm divide-y items-start">
            <p className="text-semibold">Order Summary</p>
            <div className="grid gap-2 my-4">
                <div className="flex justify-between">
                    <p className="text-slate-400">Item</p>
                    <p>{totalCart('quantity')}</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-slate-400">Sub Total</p>
                    <p>${cartTotal.toFixed(2)}</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-slate-400">Tax(12%)</p>
                    <p>${TAX_RATE.toFixed(2)}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <Button onClick={() => handleConfirm() } className={confirmBtn} disabled={disabledBtn}>Confrim</Button>
        </section>
    )
}

export default memo(CartPage);