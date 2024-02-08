import { useParams,useLocation } from "react-router-dom";
export const URLparameter = () => {
    const {Id} = useParams();
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    console.log(query)
    console.log(search);
    return(
        <div>
            <h1>URLparameterです</h1>
            <p>パラメーター　{Id}</p>
            <p>クエリパラメーター{query.get("name")}</p>
        </div>
    )
}