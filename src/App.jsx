import {BrowserRouter,Link,Routes} from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./page1";

function App() {
  // const [count,Setcount] = useState(0);
  
  return (
    <BrowserRouter>
    <>
    <Link to = "/">Home</Link>
    <Link to = "/page1">Page1</Link>
    <Home/>
    <Page1/>
    </>
    <Routes>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
