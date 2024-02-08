import { useParams } from "react-router-dom";
export const URLparameter = () => {
    const {Id} = useParams();
    return(
        <div>
            <h1>URLparameterです</h1>
            <p>パラメーター　{Id}</p>
        </div>
    )
}