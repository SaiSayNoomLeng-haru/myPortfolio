export default function CartTotal({price, discount, quantity}){
    const discountedPrice = price - ( price * (discount / 100));
    const finalPrice = discountedPrice * quantity;

    return(
        <p>${finalPrice.toFixed(2)}</p>
    )
}