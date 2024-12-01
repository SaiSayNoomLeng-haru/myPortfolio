export default function UnorderList({children, ...props}){
    return(
        <ul {...props}>
           {children}
        </ul>
    )
}