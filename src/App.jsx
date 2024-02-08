import {Link} from "react-router-dom";
import {Router} from "./router/router";
import { PrimaryButton } from "./atoms/button/PrimaryButton";
function App() {
  // const [count,Setcount] = useState(0);
  
  return (
    <>
    
    
    
    <Link to="/">home</Link>
    <Link to="/page1">page1</Link>
    <Link to="/page2">page2</Link>
    <PrimaryButton>aiueo</PrimaryButton>
    <Router/>
    </>
  );
}

export default App;
