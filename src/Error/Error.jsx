import { useRouteError } from "react-router-dom"
import "./Error.css"



let Error=()=>{

    let err=useRouteError()
    return (
        <>
        <h2>oops somesthing went wrong</h2>
        <h3>{err.status } : {err.statusText}</h3>
        </>
    )
}

export default  Error