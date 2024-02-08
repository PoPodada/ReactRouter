import {Link,useHistory, useNavigate} from "react-router-dom"
export const Page1 = () => {
    const arr = [...Array(100).keys()]
    const navigate = useNavigate();
    const onCLickDetailA = () =>navigate("/page1/detailA")
    return(
        <>
        <h1>これはpage1</h1>
        <Link to="/page1/detailA" state={arr}>detailA</Link>
        <Link to="/page1/detailB">detailB</Link>
        <button onClick={onCLickDetailA}>DetailA</button>
        </>
        
    )
}