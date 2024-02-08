import {Link} from "react-router-dom"
export const Page2 = () => {
    return(
        <>
        <h1>これはpage2</h1>
        <Link to = "/page2/200">URLparameter</Link>
        <Link to = "/page2/200?name=hogehoge">Queryparameter</Link>
        </>
        
    )
}