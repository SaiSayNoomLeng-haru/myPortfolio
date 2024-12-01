import { FaStar } from "react-icons/fa";

export default function ReviewContent({ rating, description, author, position }) {
    const stars = Array.from({ length: Math.floor(rating) }, (_, i) => i); 
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                {stars.map((_, index) => (
                    <FaStar key={index} className="text-custom-orange" />
                ))}
                <span>{rating.toFixed(1)}</span>
            </div>
            <p>{description}</p>
            <p className="font-semibold capitalize mt-2">{author}</p>
            <p className="capitalize">{position}</p>
        </div>
    );
}
