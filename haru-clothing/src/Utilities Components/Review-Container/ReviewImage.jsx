export default function ReviewImage({author, imageUrl, ...props}){
    
    return(
        <div className="relative" {...props}>
            <img 
            src={imageUrl}
            alt={`${author}'s image`}
            aria-label={`${author}'s photo`}
            loading="lazy"
            className="max-w-[400px] h-[200px] mx-auto object-cover relative"
            />
            <p className="absolute top-0 right-0 p-2 bg-custom-orange text-black text-3xl">"</p>
        </div>
        
    )
}