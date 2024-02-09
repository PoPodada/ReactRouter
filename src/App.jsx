import {Link} from "react-router-dom";
import {Router} from "./router/router";
import { PrimaryButton } from "./atoms/button/PrimaryButton";
import { SearchInput } from "./molecules/SearchInput";
import { UserCard } from "./organisms/user/usercard";
import axios from "axios";
function App() {
  // const [count,Setcount] = useState(0);
  const onClickUsers = () =>{    
    axios.get("https://jsonplaceholder.typicode.com/usersx")
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error) =>{
      console.log(error)
    })

  }
  const onClickUser = () =>{    
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res)=>{
      console.log(res)
    })
  }
  return (
    <>
    
    
    
    <Link to="/">home</Link>
    <Link to="/page1">page1</Link>
    <Link to="/page2">page2</Link>
    <PrimaryButton>aiueo</PrimaryButton>
    <SearchInput/>
    <UserCard/>
    <Router/>
    <div>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser}>id= 1のuser</button>
    </div>
    </>
  );
}

export default App;
