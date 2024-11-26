import Action from "./Action";
import ProductCard from "./ProductCard";
import CardAddToCart from "./CardAddToCart";
import CardImg from "./CardImg";
import DiscountBadge from "./DiscountBadge";
import ProductDetail from "./ProductDetail";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductType from "./ProductType";
import ToDetail from "./ToDetail";
import ToWhishlist from "./ToWishlist";


ProductCard.Image = CardImg;
ProductCard.Action = Action;
ProductCard.DiscountBadge = DiscountBadge;
ProductCard.Name = ProductName;
ProductCard.Price = ProductPrice;
ProductCard.AddToCart = CardAddToCart;
ProductCard.Type = ProductType;
ProductCard.ToDetail = ToDetail;
ProductCard.ToWishList = ToWhishlist;
ProductCard.Rating = ProductRating;
ProductCard.Detail = ProductDetail;

export default ProductCard;
