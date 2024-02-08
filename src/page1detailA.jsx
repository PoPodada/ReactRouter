import { useLocation, useNavigate } from "react-router-dom"
export const Page1detailA = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);

    return(
        <>
        <h1>これはpage1detaila</h1>
        <button onClick={onClickBack}>戻る</button>
        </>
    )
}