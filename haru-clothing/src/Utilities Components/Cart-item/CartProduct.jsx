import { IoClose } from "react-icons/io5";
import Button from "../Button";

export default function CartProduct({imageUrl, name, id, deleteProduct}){
    return(
        <div className="place-self-start flex gap-2 items-center">
            <Button className="!p-1 border border-custom-orange rounded-full"
            onClick={() => deleteProduct(id)}>
                <IoClose />
            </Button>
            <img src={imageUrl[0]} className="w-[50px]" loading="lazy" alt={`${name}'s photo`} aria-label={`${name}'s product photo`} />
            <p className="text-[0.75rem] font-semibold">{name}</p>
        </div>
    )
}