import { useRouteError } from "react-router-dom"

export default function ErrorComponent(){
    const error = useRouteError();
    return(
        <section>
            <p>{error.status}</p>
            <p>{error.statusTest}</p>
            <p>{error.success}</p>
        </section>
    )
}