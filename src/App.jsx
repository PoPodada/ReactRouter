import {Link,Routes,Route} from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./page1";

function App() {
  // const [count,Setcount] = useState(0);
  
  return (
    <>
    
    
    
    <Link to="/">home</Link>
    <Link to="/page1">page1</Link>
    <Routes>
      <Route path="/" element= {<Home/>} render/>
      <Route path="/page1" element= {<Page1/>}/>
      
    </Routes>
    </>
  );
}

export default App;
