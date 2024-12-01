import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button";

export default function CartQuantity({quantity, id, addQuantity, reduceQuantity}){
    return(
        <div className="grid grid-cols-3 text-center place-items-center">
            <Button onClick={() => reduceQuantity(id)} className="border active:bg-custom-orange justify-self-center py-1 px-1">
                <FaMinus />
            </Button>
            <p className="font-semibold ">{quantity}</p>
            <Button onClick={() => addQuantity(id)}  className="border active:bg-custom-orange justify-self-center py-1 px-1">
                <FaPlus />
            </Button>
        </div>
    )
}