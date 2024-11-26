import classNames from "classnames"

export default function PageTitle({className = '', destination}){
    const pageTitle = classNames(
        'text-center bg-custom-accent p-5 space-y-8', className
    )
    return(
        <div className={pageTitle}>
            <h1 className="text-3xl font-semibold capitalize">{destination}</h1>
            <p className="text-slate-600 font-semibold capitalize">Home / {destination}</p>
        </div>
    )
}
