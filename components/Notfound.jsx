import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
// not found is an error component, message is an props object that iss used in usefetch we pass the err as message in not found component
function NotFound({message}){
    const err = useRouteError();
    
    
    return(

        <>
           <h1>OOPS!..</h1>
            <h2>{message || err?.message || "Something went wrong."}</h2>
           <h1>{err.data}</h1>
           <h3>{err.status} {err.statusText}</h3>
           <Link to="/">
             <button className="errhome">Back to Home</button>
           </Link>

        </>
    )
}
export default NotFound;