import {Link} from "react-router-dom";
import {Router} from "./router/router";
function App() {
  // const [count,Setcount] = useState(0);
  
  return (
    <>
    
    
    
    <Link to="/">home</Link>
    <Link to="/page1">page1</Link>
    <Link to="/page2">page2</Link>

    <Router/>
    </>
  );
}

export default App;
