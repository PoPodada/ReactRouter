import { Routes,Link,Route } from "react-router-dom"
import { Page1detailA } from "./page1detailA"
import { Page1detailB } from "./page1detailB"
export const Page1 = () => {
    return(
        <>
        <h1>これはpage1</h1>
        <Link to="/page1/detailA">detailA</Link>
        <Link to="/page1/detailB">detailB</Link>
        <Routes>
            <Route path="/page1/detailA" element= {<Page1detailA/>}/>
            <Route path="/page1/detailB" element= {<Page1detailB/>}/>
      
        </Routes>
        </>
        
    )
}