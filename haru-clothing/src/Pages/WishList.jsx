import { memo, useContext } from "react"
import { AppContext } from "../App";
import classNames from "classnames";
import PageTitle from "../Utilities Components/PageTitle";
import Button from "../Utilities Components/Button";


const WishList = () => {
    const { favorite, handleCart, handleFav } = useContext(AppContext);
    const favArr = Object.values(favorite).map(v => v);
   
    // classes
    const favSection = classNames(
        'grid gap-10'
    )

    return(
        <section className={favSection}>
            <PageTitle destination='Wishlist' />

            <div className="grid md:grid-cols-2 gap-5 p-5">
                {
                    favArr
                        .filter(item => item.favorited)
                        .map(item => (
                            <div className="flex items-start gap-3 justify-between bg-custom-accent p-3 rounded-lg" key={item.id}>
                                <img 
                                    src={item.imageUrl[0]} 
                                    alt={`${item.name}'s photo`}
                                    aria-label={`${item.name}'s image`}
                                    className="max-w-[20%] rounded-lg flex-none" />
                                <div className="flex-auto flex flex-col justify-between gap-1">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="font-semibold"> Price: <span className="font-normal text-red-800">${item.price}</span></p>
                                    <p className="font-semibold"> Discount: <span className="font-normal text-red-800">{item.discount}%</span></p>
                                    <div className="flex gap-2">
                                        <Button onClick={() => handleCart(item)} className="bg-custom-dark text-white rounded-lg max-w-[max-content]">Add to Cart</Button>
                                        <Button onClick={() => handleFav(item)} className="bg-custom-orange text-red-700 rounded-lg">Delete From List</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
        )
    }

export default memo(WishList);