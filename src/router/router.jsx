import { Route,Routes } from "react-router-dom"
import { Home } from "../Home"
import { Page1 } from "../page1"
import { Page1detailA } from "../page1detailA"
import { Page1detailB } from "../page1detailB"
import { Page2 } from "../page2"
import { URLparameter } from "../UrlParameter"
import { NotFound } from "../Notfound"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page1/detailA" element= {<Page1detailA/>}/>
            <Route path="/page1/detailB" element= {<Page1detailB/>}/>
            <Route path="/page2" element= {<Page2/>}/>
            <Route path="/page2/:Id" element= {<URLparameter/>}/>
            <Route path="*" element= {<NotFound/>}/>
            

            
        </Routes>
    )
}