import {Link} from "react-router-dom"
export const Page1 = () => {
    return(
        <>
        <h1>これはpage1</h1>
        <Link to="/page1/detailA">detailA</Link>
        <Link to="/page1/detailB">detailB</Link>
       
        </>
        
    )
}