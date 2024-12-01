export default function ListItems({children, ...props}){
    return(
        <li {...props}>{children}</li>
    )
}