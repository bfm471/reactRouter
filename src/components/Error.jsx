import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Upsis...</h1>
            <h3>Miten sinä tänne päädyit?</h3>
            <h2><Link to ={"/"}>&#x1f3e0;</Link></h2>
            <p>{error.data}</p>
        </div>
    )
}